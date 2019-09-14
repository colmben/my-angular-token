import { ActivatedRoute, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { SignInData, RegisterData, UpdatePasswordData, ResetPasswordData, UserType, UserData, AuthData, ApiResponse, AngularTokenOptions, TokenPlatform, TokenInAppBrowser } from './angular-token.model';
export declare class AngularTokenService implements CanActivate {
    private http;
    private platformId;
    private activatedRoute;
    private router;
    readonly currentUserType: string;
    readonly currentUserData: UserData;
    readonly currentAuthData: AuthData;
    readonly apiBase: string;
    tokenOptions: AngularTokenOptions;
    private options;
    userType: BehaviorSubject<UserType>;
    authData: BehaviorSubject<AuthData>;
    userData: BehaviorSubject<UserData>;
    private global;
    private localStorage;
    constructor(http: HttpClient, config: any, platformId: Object, activatedRoute: ActivatedRoute, router: Router);
    userSignedIn(): boolean;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    /**
     *
     * Actions
     *
     */
    registerAccount(registerData: RegisterData, additionalData?: any): Observable<ApiResponse>;
    deleteAccount(): Observable<ApiResponse>;
    signIn(signInData: SignInData, additionalData?: any): Observable<ApiResponse>;
    signInOAuth(oAuthType: string, inAppBrowser?: TokenInAppBrowser<any, any>, platform?: TokenPlatform): Observable<any>;
    processOAuthCallback(): void;
    signOut(): Observable<ApiResponse>;
    validateToken(): Observable<ApiResponse>;
    updatePassword(updatePasswordData: UpdatePasswordData): Observable<ApiResponse>;
    resetPassword(resetPasswordData: ResetPasswordData): Observable<ApiResponse>;
    /**
     *
     * Construct Paths / Urls
     *
     */
    private getUserPath;
    private getApiPath;
    private getServerPath;
    private getOAuthPath;
    private getOAuthUrl;
    /**
     *
     * Get Auth Data
     *
     */
    private tryLoadAuthData;
    getAuthHeadersFromResponse(data: HttpResponse<any> | HttpErrorResponse): void;
    private getAuthDataFromPostMessage;
    getAuthDataFromStorage(): void;
    private getAuthDataFromParams;
    /**
     *
     * Set Auth Data
     *
     */
    private setAuthData;
    /**
     *
     * Validate Auth Data
     *
     */
    private checkAuthData;
    /**
     *
     * OAuth
     *
     */
    private requestCredentialsViaPostMessage;
    private oAuthWindowResponseFilter;
    /**
     *
     * Utilities
     *
     */
    private getUserTypeByName;
}
