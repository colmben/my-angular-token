/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SignInData() { }
if (false) {
    /** @type {?} */
    SignInData.prototype.login;
    /** @type {?} */
    SignInData.prototype.password;
    /** @type {?|undefined} */
    SignInData.prototype.userType;
}
/**
 * @record
 */
export function RegisterData() { }
if (false) {
    /** @type {?} */
    RegisterData.prototype.login;
    /** @type {?} */
    RegisterData.prototype.password;
    /** @type {?} */
    RegisterData.prototype.passwordConfirmation;
    /** @type {?|undefined} */
    RegisterData.prototype.name;
    /** @type {?|undefined} */
    RegisterData.prototype.userType;
}
/**
 * @record
 */
export function RegisterData() { }
/**
 * @record
 */
export function UpdatePasswordData() { }
if (false) {
    /** @type {?} */
    UpdatePasswordData.prototype.password;
    /** @type {?} */
    UpdatePasswordData.prototype.passwordConfirmation;
    /** @type {?|undefined} */
    UpdatePasswordData.prototype.passwordCurrent;
    /** @type {?|undefined} */
    UpdatePasswordData.prototype.userType;
    /** @type {?|undefined} */
    UpdatePasswordData.prototype.resetPasswordToken;
}
/**
 * @record
 */
export function ResetPasswordData() { }
if (false) {
    /** @type {?} */
    ResetPasswordData.prototype.login;
    /** @type {?|undefined} */
    ResetPasswordData.prototype.userType;
}
/**
 * @record
 */
export function ApiResponse() { }
if (false) {
    /** @type {?|undefined} */
    ApiResponse.prototype.status;
    /** @type {?|undefined} */
    ApiResponse.prototype.success;
    /** @type {?|undefined} */
    ApiResponse.prototype.statusText;
    /** @type {?|undefined} */
    ApiResponse.prototype.data;
    /** @type {?|undefined} */
    ApiResponse.prototype.errors;
}
/**
 * @record
 */
export function AuthData() { }
if (false) {
    /** @type {?} */
    AuthData.prototype.accessToken;
    /** @type {?} */
    AuthData.prototype.client;
    /** @type {?} */
    AuthData.prototype.expiry;
    /** @type {?} */
    AuthData.prototype.tokenType;
    /** @type {?} */
    AuthData.prototype.uid;
}
/**
 * @record
 */
export function UserData() { }
if (false) {
    /** @type {?} */
    UserData.prototype.id;
    /** @type {?} */
    UserData.prototype.provider;
    /** @type {?} */
    UserData.prototype.uid;
    /** @type {?} */
    UserData.prototype.name;
    /** @type {?} */
    UserData.prototype.nickname;
    /** @type {?} */
    UserData.prototype.image;
    /** @type {?} */
    UserData.prototype.login;
}
/**
 * @record
 */
export function UserType() { }
if (false) {
    /** @type {?} */
    UserType.prototype.name;
    /** @type {?} */
    UserType.prototype.path;
}
/**
 * @record
 * @template T, Y
 */
export function TokenInAppBrowser() { }
if (false) {
    /**
     * @param {?} url
     * @param {?=} target
     * @param {?=} options
     * @return {?}
     */
    TokenInAppBrowser.prototype.create = function (url, target, options) { };
}
/**
 * @record
 */
export function TokenPlatform() { }
if (false) {
    /**
     * @param {?} platformName
     * @return {?}
     */
    TokenPlatform.prototype.is = function (platformName) { };
}
/**
 * @record
 */
export function AngularTokenOptions() { }
if (false) {
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.angularTokenOptionsProvider;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.apiBase;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.apiPath;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.signInPath;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.signInRedirect;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.signInStoredUrlStorageKey;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.signOutPath;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.validateTokenPath;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.signOutFailedValidate;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.deleteAccountPath;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.registerAccountPath;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.registerAccountCallback;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.updatePasswordPath;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.resetPasswordPath;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.resetPasswordCallback;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.userTypes;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.loginField;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.oAuthBase;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.oAuthPaths;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.oAuthCallbackPath;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.oAuthWindowType;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.oAuthWindowOptions;
    /** @type {?|undefined} */
    AngularTokenOptions.prototype.oAuthBrowserCallbacks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10b2tlbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdG9rZW4vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci10b2tlbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsZ0NBSUM7OztJQUhDLDJCQUErQjs7SUFDL0IsOEJBQStCOztJQUMvQiw4QkFBK0I7Ozs7O0FBR2pDLGtDQU1DOzs7SUFMQyw2QkFBK0I7O0lBQy9CLGdDQUErQjs7SUFDL0IsNENBQStCOztJQUMvQiw0QkFBK0I7O0lBQy9CLGdDQUErQjs7Ozs7QUFHakMsa0NBRUM7Ozs7QUFFRCx3Q0FNQzs7O0lBTEMsc0NBQStCOztJQUMvQixrREFBK0I7O0lBQy9CLDZDQUErQjs7SUFDL0Isc0NBQStCOztJQUMvQixnREFBK0I7Ozs7O0FBR2pDLHVDQUdDOzs7SUFGQyxrQ0FBK0I7O0lBQy9CLHFDQUErQjs7Ozs7QUFLakMsaUNBTUM7OztJQUxDLDZCQUFnQjs7SUFDaEIsOEJBQWtCOztJQUNsQixpQ0FBb0I7O0lBQ3BCLDJCQUFnQjs7SUFDaEIsNkJBQWE7Ozs7O0FBS2YsOEJBTUM7OztJQUxDLCtCQUF1Qjs7SUFDdkIsMEJBQXVCOztJQUN2QiwwQkFBdUI7O0lBQ3ZCLDZCQUF1Qjs7SUFDdkIsdUJBQXVCOzs7OztBQUd6Qiw4QkFRQzs7O0lBUEMsc0JBQXVCOztJQUN2Qiw0QkFBdUI7O0lBQ3ZCLHVCQUF1Qjs7SUFDdkIsd0JBQXVCOztJQUN2Qiw0QkFBdUI7O0lBQ3ZCLHlCQUFvQjs7SUFDcEIseUJBQXVCOzs7OztBQUt6Qiw4QkFHQzs7O0lBRkMsd0JBQXVCOztJQUN2Qix3QkFBdUI7Ozs7OztBQUd6Qix1Q0FFQzs7Ozs7Ozs7SUFEQyx5RUFBOEQ7Ozs7O0FBR2hFLG1DQUVDOzs7Ozs7SUFEQyx5REFBa0M7Ozs7O0FBR3BDLHlDQWdDQzs7O0lBL0JDLDBEQUF1Qzs7SUFFdkMsc0NBQW1DOztJQUNuQyxzQ0FBbUM7O0lBRW5DLHlDQUFtQzs7SUFDbkMsNkNBQW1DOztJQUNuQyx3REFBbUM7O0lBRW5DLDBDQUFtQzs7SUFDbkMsZ0RBQW1DOztJQUNuQyxvREFBb0M7O0lBRXBDLGdEQUFtQzs7SUFDbkMsa0RBQW1DOztJQUNuQyxzREFBbUM7O0lBRW5DLGlEQUFtQzs7SUFFbkMsZ0RBQW1DOztJQUNuQyxvREFBbUM7O0lBRW5DLHdDQUF1Qzs7SUFDdkMseUNBQW1DOztJQUVuQyx3Q0FBbUM7O0lBQ25DLHlDQUF1RDs7SUFDdkQsZ0RBQW1DOztJQUNuQyw4Q0FBbUM7O0lBQ25DLGlEQUF1RDs7SUFDdkQsb0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRnVuY3Rpb24gRGF0YVxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTaWduSW5EYXRhIHtcbiAgbG9naW46ICAgICAgICAgICAgICAgICAgc3RyaW5nO1xuICBwYXNzd29yZDogICAgICAgICAgICAgICBzdHJpbmc7XG4gIHVzZXJUeXBlPzogICAgICAgICAgICAgIHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RlckRhdGEge1xuICBsb2dpbjogICAgICAgICAgICAgICAgICBzdHJpbmc7XG4gIHBhc3N3b3JkOiAgICAgICAgICAgICAgIHN0cmluZztcbiAgcGFzc3dvcmRDb25maXJtYXRpb246ICAgc3RyaW5nO1xuICBuYW1lPzogICAgICAgICAgICAgICAgICBzdHJpbmc7XG4gIHVzZXJUeXBlPzogICAgICAgICAgICAgIHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RlckRhdGEge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUGFzc3dvcmREYXRhIHtcbiAgcGFzc3dvcmQ6ICAgICAgICAgICAgICAgc3RyaW5nO1xuICBwYXNzd29yZENvbmZpcm1hdGlvbjogICBzdHJpbmc7XG4gIHBhc3N3b3JkQ3VycmVudD86ICAgICAgIHN0cmluZztcbiAgdXNlclR5cGU/OiAgICAgICAgICAgICAgc3RyaW5nO1xuICByZXNldFBhc3N3b3JkVG9rZW4/OiAgICBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZERhdGEge1xuICBsb2dpbjogICAgICAgICAgICAgICAgICBzdHJpbmc7XG4gIHVzZXJUeXBlPzogICAgICAgICAgICAgIHN0cmluZztcbn1cblxuLy8gQVBJIFJlc3BvbnNlIEZvcm1hdFxuXG5leHBvcnQgaW50ZXJmYWNlIEFwaVJlc3BvbnNlIHtcbiAgc3RhdHVzPzogc3RyaW5nO1xuICBzdWNjZXNzPzogYm9vbGVhbjtcbiAgc3RhdHVzVGV4dD86IHN0cmluZztcbiAgZGF0YT86IFVzZXJEYXRhO1xuICBlcnJvcnM/OiBhbnk7XG59XG5cbi8vIFN0YXRlIERhdGFcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoRGF0YSB7XG4gIGFjY2Vzc1Rva2VuOiAgICBzdHJpbmc7XG4gIGNsaWVudDogICAgICAgICBzdHJpbmc7XG4gIGV4cGlyeTogICAgICAgICBzdHJpbmc7XG4gIHRva2VuVHlwZTogICAgICBzdHJpbmc7XG4gIHVpZDogICAgICAgICAgICBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRhdGEge1xuICBpZDogICAgICAgICAgICAgbnVtYmVyO1xuICBwcm92aWRlcjogICAgICAgc3RyaW5nO1xuICB1aWQ6ICAgICAgICAgICAgc3RyaW5nO1xuICBuYW1lOiAgICAgICAgICAgc3RyaW5nO1xuICBuaWNrbmFtZTogICAgICAgc3RyaW5nO1xuICBpbWFnZTogICAgICAgICAgYW55O1xuICBsb2dpbjogICAgICAgICAgc3RyaW5nO1xufVxuXG4vLyBDb25maWd1cmF0aW9uIE9wdGlvbnNcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyVHlwZSB7XG4gIG5hbWU6ICAgICAgICAgICBzdHJpbmc7XG4gIHBhdGg6ICAgICAgICAgICBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5JbkFwcEJyb3dzZXI8VCBleHRlbmRzIHt9LCBZIGV4dGVuZHMge30+IHtcbiAgY3JlYXRlKHVybDogc3RyaW5nLCB0YXJnZXQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcgfCBZKTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2tlblBsYXRmb3JtIHtcbiAgaXMocGxhdGZvcm1OYW1lOiBzdHJpbmcpOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuZ3VsYXJUb2tlbk9wdGlvbnMge1xuICBhbmd1bGFyVG9rZW5PcHRpb25zUHJvdmlkZXI/OiBQcm92aWRlcjtcblxuICBhcGlCYXNlPzogICAgICAgICAgICAgICAgICAgc3RyaW5nO1xuICBhcGlQYXRoPzogICAgICAgICAgICAgICAgICAgc3RyaW5nO1xuXG4gIHNpZ25JblBhdGg/OiAgICAgICAgICAgICAgICBzdHJpbmc7XG4gIHNpZ25JblJlZGlyZWN0PzogICAgICAgICAgICBzdHJpbmc7XG4gIHNpZ25JblN0b3JlZFVybFN0b3JhZ2VLZXk/OiBzdHJpbmc7XG5cbiAgc2lnbk91dFBhdGg/OiAgICAgICAgICAgICAgIHN0cmluZztcbiAgdmFsaWRhdGVUb2tlblBhdGg/OiAgICAgICAgIHN0cmluZztcbiAgc2lnbk91dEZhaWxlZFZhbGlkYXRlPzogICAgIGJvb2xlYW47XG5cbiAgZGVsZXRlQWNjb3VudFBhdGg/OiAgICAgICAgIHN0cmluZztcbiAgcmVnaXN0ZXJBY2NvdW50UGF0aD86ICAgICAgIHN0cmluZztcbiAgcmVnaXN0ZXJBY2NvdW50Q2FsbGJhY2s/OiAgIHN0cmluZztcblxuICB1cGRhdGVQYXNzd29yZFBhdGg/OiAgICAgICAgc3RyaW5nO1xuXG4gIHJlc2V0UGFzc3dvcmRQYXRoPzogICAgICAgICBzdHJpbmc7XG4gIHJlc2V0UGFzc3dvcmRDYWxsYmFjaz86ICAgICBzdHJpbmc7XG5cbiAgdXNlclR5cGVzPzogICAgICAgICAgICAgICAgIFVzZXJUeXBlW107XG4gIGxvZ2luRmllbGQ/OiAgICAgICAgICAgICAgICBzdHJpbmc7XG5cbiAgb0F1dGhCYXNlPzogICAgICAgICAgICAgICAgIHN0cmluZztcbiAgb0F1dGhQYXRocz86ICAgICAgICAgICAgICAgIHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xuICBvQXV0aENhbGxiYWNrUGF0aD86ICAgICAgICAgc3RyaW5nO1xuICBvQXV0aFdpbmRvd1R5cGU/OiAgICAgICAgICAgc3RyaW5nO1xuICBvQXV0aFdpbmRvd09wdGlvbnM/OiAgICAgICAgeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XG4gIG9BdXRoQnJvd3NlckNhbGxiYWNrcz86ICAgICB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcbn1cbiJdfQ==