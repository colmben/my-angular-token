/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularTokenService } from './angular-token.service';
import { AngularTokenInterceptor } from './angular-token.interceptor';
import { ANGULAR_TOKEN_OPTIONS } from './angular-token.token';
export { AngularTokenService } from './angular-token.service';
var AngularTokenModule = /** @class */ (function () {
    function AngularTokenModule(parentModule) {
        if (parentModule) {
            throw new Error('AngularToken is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    AngularTokenModule.forRoot = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
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
    };
    AngularTokenModule.decorators = [
        { type: NgModule }
    ];
    /** @nocollapse */
    AngularTokenModule.ctorParameters = function () { return [
        { type: AngularTokenModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return AngularTokenModule;
}());
export { AngularTokenModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10b2tlbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXRva2VuLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItdG9rZW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELG9DQUFjLHlCQUF5QixDQUFDO0FBRXhDO0lBR0UsNEJBQW9DLFlBQWdDO1FBQ2xFLElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0dBQWdHLENBQUMsQ0FBQztTQUNuSDtJQUNILENBQUM7Ozs7O0lBQ00sMEJBQU87Ozs7SUFBZCxVQUFlLE9BQTRCO1FBQ3pDLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRCxPQUFPLENBQUMsMkJBQTJCO29CQUNuQzt3QkFDRSxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsT0FBTztxQkFDbEI7Z0JBQ0QsbUJBQW1CO2FBQ3BCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXpCRixRQUFROzs7O2dCQUcyQyxrQkFBa0IsdUJBQXZELFFBQVEsWUFBSSxRQUFROztJQXVCbkMseUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgQW5ndWxhclRva2VuT3B0aW9ucyB9IGZyb20gJy4vYW5ndWxhci10b2tlbi5tb2RlbCc7XG5pbXBvcnQgeyBBbmd1bGFyVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5ndWxhclRva2VuSW50ZXJjZXB0b3IgfSBmcm9tICcuL2FuZ3VsYXItdG9rZW4uaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQU5HVUxBUl9UT0tFTl9PUFRJT05TIH0gZnJvbSAnLi9hbmd1bGFyLXRva2VuLnRva2VuJztcblxuZXhwb3J0ICogZnJvbSAnLi9hbmd1bGFyLXRva2VuLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJUb2tlbk1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBBbmd1bGFyVG9rZW5Nb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJUb2tlbiBpcyBhbHJlYWR5IGxvYWRlZC4gSXQgc2hvdWxkIG9ubHkgYmUgaW1wb3J0ZWQgaW4geW91ciBhcHBsaWNhdGlvblxcJ3MgbWFpbiBtb2R1bGUuJyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IEFuZ3VsYXJUb2tlbk9wdGlvbnMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFuZ3VsYXJUb2tlbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgdXNlQ2xhc3M6IEFuZ3VsYXJUb2tlbkludGVyY2VwdG9yLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMuYW5ndWxhclRva2VuT3B0aW9uc1Byb3ZpZGVyIHx8XG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBTkdVTEFSX1RPS0VOX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAgQW5ndWxhclRva2VuU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==