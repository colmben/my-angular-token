/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AngularTokenService } from './angular-token.service';
import { tap } from 'rxjs/operators';
export class AngularTokenInterceptor {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularTokenInterceptor.prototype.tokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10b2tlbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdG9rZW4vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci10b2tlbi5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQXdELFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTdILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBRWxDLFlBQXFCLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUFLLENBQUM7Ozs7OztJQUU1RCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUVoRCxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOzs7Y0FHckMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUs7UUFFakQsSUFBSSxRQUFRO1lBQ1YsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7O2tCQUV0RyxPQUFPLEdBQUc7Z0JBQ2QsY0FBYyxFQUFFLFFBQVEsQ0FBQyxXQUFXO2dCQUNwQyxRQUFRLEVBQVEsUUFBUSxDQUFDLE1BQU07Z0JBQy9CLFFBQVEsRUFBUSxRQUFRLENBQUMsTUFBTTtnQkFDL0IsWUFBWSxFQUFJLFFBQVEsQ0FBQyxTQUFTO2dCQUNsQyxLQUFLLEVBQVcsUUFBUSxDQUFDLEdBQUc7YUFDN0I7WUFFRCxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDZCxVQUFVLEVBQUUsT0FBTzthQUNwQixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUM1QixHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQy9CLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUlPLGNBQWMsQ0FBQyxHQUEyRDtRQUNoRixJQUFJLEdBQUcsWUFBWSxZQUFZLElBQUksR0FBRyxZQUFZLGlCQUFpQixFQUFFO1lBQ25FLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtnQkFDekgsSUFBSSxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRDtTQUNGO0lBQ0gsQ0FBQzs7O1lBM0NGLFVBQVU7Ozs7WUFMRixtQkFBbUI7Ozs7Ozs7SUFRYiwrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBSZXF1ZXN0LCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBIYW5kbGVyLCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBBbmd1bGFyVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLXRva2VuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmd1bGFyVG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBBbmd1bGFyVG9rZW5TZXJ2aWNlICkgeyB9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cbiAgICAvLyBHZXQgYXV0aCBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIHRoaXMudG9rZW5TZXJ2aWNlLmdldEF1dGhEYXRhRnJvbVN0b3JhZ2UoKTtcblxuICAgIC8vIEFkZCB0aGUgaGVhZGVycyBpZiB0aGUgcmVxdWVzdCBpcyBnb2luZyB0byB0aGUgY29uZmlndXJlZCBzZXJ2ZXJcbiAgICBjb25zdCBhdXRoRGF0YSA9IHRoaXMudG9rZW5TZXJ2aWNlLmF1dGhEYXRhLnZhbHVlO1xuXG4gICAgaWYgKGF1dGhEYXRhICYmXG4gICAgICAodGhpcy50b2tlblNlcnZpY2UudG9rZW5PcHRpb25zLmFwaUJhc2UgPT09IG51bGwgfHwgcmVxLnVybC5tYXRjaCh0aGlzLnRva2VuU2VydmljZS50b2tlbk9wdGlvbnMuYXBpQmFzZSkpKSB7XG5cbiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICdhY2Nlc3MtdG9rZW4nOiBhdXRoRGF0YS5hY2Nlc3NUb2tlbixcbiAgICAgICAgJ2NsaWVudCc6ICAgICAgIGF1dGhEYXRhLmNsaWVudCxcbiAgICAgICAgJ2V4cGlyeSc6ICAgICAgIGF1dGhEYXRhLmV4cGlyeSxcbiAgICAgICAgJ3Rva2VuLXR5cGUnOiAgIGF1dGhEYXRhLnRva2VuVHlwZSxcbiAgICAgICAgJ3VpZCc6ICAgICAgICAgIGF1dGhEYXRhLnVpZFxuICAgICAgfTtcblxuICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczogaGVhZGVyc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZSh0YXAoXG4gICAgICAgIHJlcyA9PiB0aGlzLmhhbmRsZVJlc3BvbnNlKHJlcyksXG4gICAgICAgIGVyciA9PiB0aGlzLmhhbmRsZVJlc3BvbnNlKGVycilcbiAgICApKTtcbiAgfVxuXG5cbiAgLy8gUGFyc2UgQXV0aCBkYXRhIGZyb20gcmVzcG9uc2VcbiAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZShyZXM6IEh0dHBSZXNwb25zZTxhbnk+IHwgSHR0cEVycm9yUmVzcG9uc2UgfCBIdHRwRXZlbnQ8YW55Pik6IHZvaWQge1xuICAgIGlmIChyZXMgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UgfHwgcmVzIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgIGlmICh0aGlzLnRva2VuU2VydmljZS50b2tlbk9wdGlvbnMuYXBpQmFzZSA9PT0gbnVsbCB8fCAocmVzLnVybCAmJiByZXMudXJsLm1hdGNoKHRoaXMudG9rZW5TZXJ2aWNlLnRva2VuT3B0aW9ucy5hcGlCYXNlKSkpIHtcbiAgICAgICAgdGhpcy50b2tlblNlcnZpY2UuZ2V0QXV0aEhlYWRlcnNGcm9tUmVzcG9uc2UocmVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==