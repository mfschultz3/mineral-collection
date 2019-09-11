import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  private token: string;
 constructor() { 
   this.token = '54b660b8-b275-42ed-99c2-dad6befeea8f';
 }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let authRequest = request.clone({
			setHeaders: {
				Authorization: this.token
			}
		})
		return next.handle(authRequest)
	}


}