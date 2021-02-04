import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === '404') {
          alert('sayfa bulunamadı..');
        } else {
          alert('bir hata meydana geldi. lütfen daha sonra tekrar deneyiniz..');
        }
        this.router.navigateByUrl('/');
        return throwError(error);
      })
    );

    throw new Error('Method not implemented');
  }

  constructor(
    private router: Router
  ) {
  }
}
