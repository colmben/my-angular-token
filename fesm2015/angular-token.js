import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformServer } from '@angular/common';
import { Observable, fromEvent, interval, BehaviorSubject } from 'rxjs';
import { InjectionToken, Injectable, Optional, Inject, PLATFORM_ID, NgModule, SkipSelf, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { pluck, filter, share, finalize, tap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANGULAR_TOKEN_OPTIONS = new InjectionToken('ANGULAR_TOKEN_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTokenService {
    /**
     * @param {?} http
     * @param {?} config
     * @param {?} platformId
     * @param {?} activatedRoute
     * @param {?} router
     */
    constructor(http, config, platformId, activatedRoute, router) {
        this.http = http;
        this.platformId = platformId;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userType = new BehaviorSubject(null);
        this.authData = new BehaviorSubject(null);
        this.userData = new BehaviorSubject(null);
        this.localStorage = {};
        this.global = (typeof window !== 'undefined') ? window : {};
        if (isPlatformServer(this.platformId)) {
            // Bad pratice, needs fixing
            this.global = {
                open: () => null,
                location: {
                    href: '/',
                    origin: '/'
                }
            };
            // Bad pratice, needs fixing
            this.localStorage.setItem = () => null;
            this.localStorage.getItem = () => null;
            this.localStorage.removeItem = () => null;
        }
        else {
            this.localStorage = localStorage;
        }
        /** @type {?} */
        const defaultOptions = {
            apiPath: null,
            apiBase: null,
            signInPath: 'auth/sign_in',
            signInRedirect: null,
            signInStoredUrlStorageKey: null,
            signOutPath: 'auth/sign_out',
            validateTokenPath: 'auth/validate_token',
            signOutFailedValidate: false,
            registerAccountPath: 'auth',
            deleteAccountPath: 'auth',
            registerAccountCallback: this.global.location.href,
            updatePasswordPath: 'auth',
            resetPasswordPath: 'auth/password',
            resetPasswordCallback: this.global.location.href,
            userTypes: null,
            loginField: 'email',
            oAuthBase: this.global.location.origin,
            oAuthPaths: {
                github: 'auth/github'
            },
            oAuthCallbackPath: 'oauth_callback',
            oAuthWindowType: 'newWindow',
            oAuthWindowOptions: null,
            oAuthBrowserCallbacks: {
                github: 'auth/github/callback',
            },
        };
        /** @type {?} */
        const mergedOptions = ((/** @type {?} */ (Object))).assign(defaultOptions, config);
        this.options = mergedOptions;
        if (this.options.apiBase === null) {
            console.warn(`[angular-token] You have not configured 'apiBase', which may result in security issues. ` +
                `Please refer to the documentation at https://github.com/neroniaky/angular-token/wiki`);
        }
        this.tryLoadAuthData();
    }
    /**
     * @return {?}
     */
    get currentUserType() {
        if (this.userType.value != null) {
            return this.userType.value.name;
        }
        else {
            return undefined;
        }
    }
    /**
     * @return {?}
     */
    get currentUserData() {
        return this.userData.value;
    }
    /**
     * @return {?}
     */
    get currentAuthData() {
        return this.authData.value;
    }
    /**
     * @return {?}
     */
    get apiBase() {
        console.warn('[angular-token] The attribute .apiBase will be removed in the next major release, please use' +
            '.tokenOptions.apiBase instead');
        return this.options.apiBase;
    }
    /**
     * @return {?}
     */
    get tokenOptions() {
        return this.options;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set tokenOptions(options) {
        this.options = ((/** @type {?} */ (Object))).assign(this.options, options);
    }
    /**
     * @return {?}
     */
    userSignedIn() {
        if (this.authData.value == null) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        if (this.userSignedIn()) {
            return true;
        }
        else {
            // Store current location in storage (usefull for redirection after signing in)
            if (this.options.signInStoredUrlStorageKey) {
                this.localStorage.setItem(this.options.signInStoredUrlStorageKey, state.url);
            }
            // Redirect user to sign in if signInRedirect is set
            if (this.router && this.options.signInRedirect) {
                this.router.navigate([this.options.signInRedirect]);
            }
            return false;
        }
    }
    /**
     *
     * Actions
     *
     * @param {?} registerData
     * @param {?=} additionalData
     * @return {?}
     */
    // Register request
    registerAccount(registerData, additionalData) {
        registerData = Object.assign({}, registerData);
        if (registerData.userType == null) {
            this.userType.next(null);
        }
        else {
            this.userType.next(this.getUserTypeByName(registerData.userType));
            delete registerData.userType;
        }
        if (registerData.password_confirmation == null &&
            registerData.passwordConfirmation != null) {
            registerData.password_confirmation = registerData.passwordConfirmation;
            delete registerData.passwordConfirmation;
        }
        if (additionalData !== undefined) {
            registerData.additionalData = additionalData;
        }
        /** @type {?} */
        const login = registerData.login;
        delete registerData.login;
        registerData[this.options.loginField] = login;
        registerData.confirm_success_url = this.options.registerAccountCallback;
        return this.http.post(this.getServerPath() + this.options.registerAccountPath, registerData);
    }
    // Delete Account
    /**
     * @return {?}
     */
    deleteAccount() {
        return this.http.delete(this.getServerPath() + this.options.deleteAccountPath);
    }
    // Sign in request and set storage
    /**
     * @param {?} signInData
     * @param {?=} additionalData
     * @return {?}
     */
    signIn(signInData, additionalData) {
        this.userType.next((signInData.userType == null) ? null : this.getUserTypeByName(signInData.userType));
        /** @type {?} */
        const body = {
            [this.options.loginField]: signInData.login,
            password: signInData.password
        };
        if (additionalData !== undefined) {
            body.additionalData = additionalData;
        }
        /** @type {?} */
        const observ = this.http.post(this.getServerPath() + this.options.signInPath, body).pipe(share());
        observ.subscribe(res => this.userData.next(res.data));
        return observ;
    }
    /**
     * @param {?} oAuthType
     * @param {?=} inAppBrowser
     * @param {?=} platform
     * @return {?}
     */
    signInOAuth(oAuthType, inAppBrowser, platform) {
        /** @type {?} */
        const oAuthPath = this.getOAuthPath(oAuthType);
        /** @type {?} */
        const callbackUrl = `${this.global.location.origin}/${this.options.oAuthCallbackPath}`;
        /** @type {?} */
        const oAuthWindowType = this.options.oAuthWindowType;
        /** @type {?} */
        const authUrl = this.getOAuthUrl(oAuthPath, callbackUrl, oAuthWindowType);
        if (oAuthWindowType === 'newWindow' ||
            (oAuthWindowType == 'inAppBrowser' && (!platform || !platform.is('cordova') || !(platform.is('ios') || platform.is('android'))))) {
            /** @type {?} */
            const oAuthWindowOptions = this.options.oAuthWindowOptions;
            /** @type {?} */
            let windowOptions = '';
            if (oAuthWindowOptions) {
                for (const key in oAuthWindowOptions) {
                    if (oAuthWindowOptions.hasOwnProperty(key)) {
                        windowOptions += `,${key}=${oAuthWindowOptions[key]}`;
                    }
                }
            }
            /** @type {?} */
            const popup = window.open(authUrl, '_blank', `closebuttoncaption=Cancel${windowOptions}`);
            return this.requestCredentialsViaPostMessage(popup);
        }
        else if (oAuthWindowType == 'inAppBrowser') {
            /** @type {?} */
            let oAuthBrowserCallback = this.options.oAuthBrowserCallbacks[oAuthType];
            if (!oAuthBrowserCallback) {
                throw new Error(`To login with oAuth provider ${oAuthType} using inAppBrowser the callback (in oAuthBrowserCallbacks) is required.`);
            }
            // let oAuthWindowOptions = this.options.oAuthWindowOptions;
            // let windowOptions = '';
            //  if (oAuthWindowOptions) {
            //     for (let key in oAuthWindowOptions) {
            //         windowOptions += `,${key}=${oAuthWindowOptions[key]}`;
            //     }
            // }
            /** @type {?} */
            let browser = inAppBrowser.create(authUrl, '_blank', 'location=no');
            return new Observable((observer) => {
                browser.on('loadstop').subscribe((ev) => {
                    if (ev.url.indexOf(oAuthBrowserCallback) > -1) {
                        browser.executeScript({ code: "requestCredentials();" }).then((credentials) => {
                            this.getAuthDataFromPostMessage(credentials[0]);
                            /** @type {?} */
                            let pollerObserv = interval(400);
                            /** @type {?} */
                            let pollerSubscription = pollerObserv.subscribe(() => {
                                if (this.userSignedIn()) {
                                    observer.next(this.authData);
                                    observer.complete();
                                    pollerSubscription.unsubscribe();
                                    browser.close();
                                }
                            }, (error) => {
                                observer.error(error);
                                observer.complete();
                            });
                        }, (error) => {
                            observer.error(error);
                            observer.complete();
                        });
                    }
                }, (error) => {
                    observer.error(error);
                    observer.complete();
                });
            });
        }
        else if (oAuthWindowType === 'sameWindow') {
            this.global.location.href = authUrl;
            return undefined;
        }
        else {
            throw new Error(`Unsupported oAuthWindowType "${oAuthWindowType}"`);
        }
    }
    /**
     * @return {?}
     */
    processOAuthCallback() {
        this.getAuthDataFromParams();
    }
    // Sign out request and delete storage
    /**
     * @return {?}
     */
    signOut() {
        return this.http.delete(this.getServerPath() + this.options.signOutPath)
            // Only remove the localStorage and clear the data after the call
            .pipe(finalize(() => {
            this.localStorage.removeItem('accessToken');
            this.localStorage.removeItem('client');
            this.localStorage.removeItem('expiry');
            this.localStorage.removeItem('tokenType');
            this.localStorage.removeItem('uid');
            this.authData.next(null);
            this.userType.next(null);
            this.userData.next(null);
        }));
    }
    // Validate token request
    /**
     * @return {?}
     */
    validateToken() {
        /** @type {?} */
        const observ = this.http.get(this.getServerPath() + this.options.validateTokenPath).pipe(share());
        observ.subscribe((res) => this.userData.next(res.data), (error) => {
            if (error.status === 401 && this.options.signOutFailedValidate) {
                this.signOut();
            }
        });
        return observ;
    }
    // Update password request
    /**
     * @param {?} updatePasswordData
     * @return {?}
     */
    updatePassword(updatePasswordData) {
        if (updatePasswordData.userType != null) {
            this.userType.next(this.getUserTypeByName(updatePasswordData.userType));
        }
        /** @type {?} */
        let args;
        if (updatePasswordData.passwordCurrent == null) {
            args = {
                password: updatePasswordData.password,
                password_confirmation: updatePasswordData.passwordConfirmation
            };
        }
        else {
            args = {
                current_password: updatePasswordData.passwordCurrent,
                password: updatePasswordData.password,
                password_confirmation: updatePasswordData.passwordConfirmation
            };
        }
        console.log('In updatePassword BEFORE IF, updatePasswordData', updatePasswordData);
        if (updatePasswordData.resetPasswordToken) {
            console.log('In updatePassword IF TRUE, updatePasswordData', updatePasswordData);
            this.tryLoadAuthData();
        }
        /** @type {?} */
        const body = args;
        return this.http.put(this.getServerPath() + this.options.updatePasswordPath, body);
    }
    // Reset password request
    /**
     * @param {?} resetPasswordData
     * @return {?}
     */
    resetPassword(resetPasswordData) {
        this.userType.next((resetPasswordData.userType == null) ? null : this.getUserTypeByName(resetPasswordData.userType));
        /** @type {?} */
        const body = {
            [this.options.loginField]: resetPasswordData.login,
            redirect_url: this.options.resetPasswordCallback
        };
        return this.http.post(this.getServerPath() + this.options.resetPasswordPath, body);
    }
    /**
     *
     * Construct Paths / Urls
     *
     * @private
     * @return {?}
     */
    getUserPath() {
        return (this.userType.value == null) ? '' : this.userType.value.path + '/';
    }
    /**
     * @private
     * @return {?}
     */
    getApiPath() {
        /** @type {?} */
        let constructedPath = '';
        if (this.options.apiBase != null) {
            constructedPath += this.options.apiBase + '/';
        }
        if (this.options.apiPath != null) {
            constructedPath += this.options.apiPath + '/';
        }
        return constructedPath;
    }
    /**
     * @private
     * @return {?}
     */
    getServerPath() {
        return this.getApiPath() + this.getUserPath();
    }
    /**
     * @private
     * @param {?} oAuthType
     * @return {?}
     */
    getOAuthPath(oAuthType) {
        /** @type {?} */
        let oAuthPath;
        oAuthPath = this.options.oAuthPaths[oAuthType];
        if (oAuthPath == null) {
            oAuthPath = `/auth/${oAuthType}`;
        }
        return oAuthPath;
    }
    /**
     * @private
     * @param {?} oAuthPath
     * @param {?} callbackUrl
     * @param {?} windowType
     * @return {?}
     */
    getOAuthUrl(oAuthPath, callbackUrl, windowType) {
        /** @type {?} */
        let url;
        url = `${this.options.oAuthBase}/${oAuthPath}`;
        url += `?omniauth_window_type=${windowType}`;
        url += `&auth_origin_url=${encodeURIComponent(callbackUrl)}`;
        if (this.userType.value != null) {
            url += `&resource_class=${this.userType.value.name}`;
        }
        return url;
    }
    /**
     *
     * Get Auth Data
     *
     * @private
     * @return {?}
     */
    // Try to load auth data
    tryLoadAuthData() {
        /** @type {?} */
        const userType = this.getUserTypeByName(this.localStorage.getItem('userType'));
        if (userType) {
            this.userType.next(userType);
        }
        this.getAuthDataFromStorage();
        if (this.activatedRoute) {
            this.getAuthDataFromParams();
        }
        // if (this.authData) {
        //     this.validateToken();
        // }
    }
    // Parse Auth data from response
    /**
     * @param {?} data
     * @return {?}
     */
    getAuthHeadersFromResponse(data) {
        /** @type {?} */
        const headers = data.headers;
        /** @type {?} */
        const authData = {
            accessToken: headers.get('access-token'),
            client: headers.get('client'),
            expiry: headers.get('expiry'),
            tokenType: headers.get('token-type'),
            uid: headers.get('uid')
        };
        this.setAuthData(authData);
    }
    // Parse Auth data from post message
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    getAuthDataFromPostMessage(data) {
        /** @type {?} */
        const authData = {
            accessToken: data['auth_token'],
            client: data['client_id'],
            expiry: data['expiry'],
            tokenType: 'Bearer',
            uid: data['uid']
        };
        this.setAuthData(authData);
    }
    // Try to get auth data from storage.
    /**
     * @return {?}
     */
    getAuthDataFromStorage() {
        /** @type {?} */
        const authData = {
            accessToken: this.localStorage.getItem('accessToken'),
            client: this.localStorage.getItem('client'),
            expiry: this.localStorage.getItem('expiry'),
            tokenType: this.localStorage.getItem('tokenType'),
            uid: this.localStorage.getItem('uid')
        };
        if (this.checkAuthData(authData)) {
            this.authData.next(authData);
        }
    }
    // Try to get auth data from url parameters.
    /**
     * @private
     * @return {?}
     */
    getAuthDataFromParams() {
        this.activatedRoute.queryParams.subscribe(queryParams => {
            /** @type {?} */
            const authData = {
                accessToken: queryParams['token'] || queryParams['auth_token'],
                client: queryParams['client_id'],
                expiry: queryParams['expiry'],
                tokenType: 'Bearer',
                uid: queryParams['uid']
            };
            if (this.checkAuthData(authData)) {
                this.authData.next(authData);
            }
        });
    }
    /**
     *
     * Set Auth Data
     *
     * @private
     * @param {?} authData
     * @return {?}
     */
    // Write auth data to storage
    setAuthData(authData) {
        if (this.checkAuthData(authData)) {
            this.authData.next(authData);
            this.localStorage.setItem('accessToken', authData.accessToken);
            this.localStorage.setItem('client', authData.client);
            this.localStorage.setItem('expiry', authData.expiry);
            this.localStorage.setItem('tokenType', authData.tokenType);
            this.localStorage.setItem('uid', authData.uid);
            if (this.userType.value != null) {
                this.localStorage.setItem('userType', this.userType.value.name);
            }
        }
    }
    /**
     *
     * Validate Auth Data
     *
     * @private
     * @param {?} authData
     * @return {?}
     */
    // Check if auth data complete and if response token is newer
    checkAuthData(authData) {
        if (authData.accessToken != null &&
            authData.client != null &&
            authData.expiry != null &&
            authData.tokenType != null &&
            authData.uid != null) {
            if (this.authData.value != null) {
                return authData.expiry >= this.authData.value.expiry;
            }
            return true;
        }
        return false;
    }
    /**
     *
     * OAuth
     *
     * @private
     * @param {?} authWindow
     * @return {?}
     */
    requestCredentialsViaPostMessage(authWindow) {
        /** @type {?} */
        const pollerObserv = interval(500);
        /** @type {?} */
        const responseObserv = fromEvent(this.global, 'message').pipe(pluck('data'), filter(this.oAuthWindowResponseFilter));
        responseObserv.subscribe(this.getAuthDataFromPostMessage.bind(this));
        /** @type {?} */
        const pollerSubscription = pollerObserv.subscribe(() => {
            if (authWindow.closed) {
                pollerSubscription.unsubscribe();
            }
            else {
                authWindow.postMessage('requestCredentials', '*');
            }
        });
        return responseObserv;
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    oAuthWindowResponseFilter(data) {
        if (data.message === 'deliverCredentials' || data.message === 'authFailure') {
            return data;
        }
    }
    /**
     *
     * Utilities
     *
     * @private
     * @param {?} name
     * @return {?}
     */
    // Match user config by user config name
    getUserTypeByName(name) {
        if (name == null || this.options.userTypes == null) {
            return null;
        }
        return this.options.userTypes.find(userType => userType.name === name);
    }
}
AngularTokenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AngularTokenService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [ANGULAR_TOKEN_OPTIONS,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ActivatedRoute, decorators: [{ type: Optional }] },
    { type: Router, decorators: [{ type: Optional }] }
];
/** @nocollapse */ AngularTokenService.ngInjectableDef = defineInjectable({ factory: function AngularTokenService_Factory() { return new AngularTokenService(inject(HttpClient), inject(ANGULAR_TOKEN_OPTIONS), inject(PLATFORM_ID), inject(ActivatedRoute, 8), inject(Router, 8)); }, token: AngularTokenService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTokenInterceptor {
    /**
     * @param {?} tokenService
     */
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        // Get auth data from local storage
        this.tokenService.getAuthDataFromStorage();
        // Add the headers if the request is going to the configured server
        /** @type {?} */
        const authData = this.tokenService.authData.value;
        if (authData &&
            (this.tokenService.tokenOptions.apiBase === null || req.url.match(this.tokenService.tokenOptions.apiBase))) {
            /** @type {?} */
            const headers = {
                'access-token': authData.accessToken,
                'client': authData.client,
                'expiry': authData.expiry,
                'token-type': authData.tokenType,
                'uid': authData.uid
            };
            req = req.clone({
                setHeaders: headers
            });
        }
        return next.handle(req).pipe(tap(res => this.handleResponse(res), err => this.handleResponse(err)));
    }
    // Parse Auth data from response
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    handleResponse(res) {
        if (res instanceof HttpResponse || res instanceof HttpErrorResponse) {
            if (this.tokenService.tokenOptions.apiBase === null || (res.url && res.url.match(this.tokenService.tokenOptions.apiBase))) {
                this.tokenService.getAuthHeadersFromResponse(res);
            }
        }
    }
}
AngularTokenInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AngularTokenInterceptor.ctorParameters = () => [
    { type: AngularTokenService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTokenModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('AngularToken is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: AngularTokenModule,
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AngularTokenInterceptor,
                    multi: true
                },
                options.angularTokenOptionsProvider ||
                    {
                        provide: ANGULAR_TOKEN_OPTIONS,
                        useValue: options
                    },
                AngularTokenService
            ]
        };
    }
}
AngularTokenModule.decorators = [
    { type: NgModule }
];
/** @nocollapse */
AngularTokenModule.ctorParameters = () => [
    { type: AngularTokenModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ANGULAR_TOKEN_OPTIONS, AngularTokenService, AngularTokenModule, AngularTokenInterceptor as ɵb, AngularTokenService as ɵa };

//# sourceMappingURL=angular-token.js.map