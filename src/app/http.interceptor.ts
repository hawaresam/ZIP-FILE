import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    console.log("inside interceptor now");
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    // if(evt.body && evt.body.success)
                        this.toasterService.success("Successfully registered", "Success",{ positionClass: 'toast-bottom-center' });
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                        this.toasterService.error("Already data present","Error", { positionClass: 'toast-bottom-center' });
                    } catch(e) {
                        this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
                    }
                    //log error 
                }
                return of(err);
            }));
    
      }
      
}