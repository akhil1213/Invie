import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private registerComponent: RegisterComponent) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.registerComponent.getToken();
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    return next.handle(newRequest);
  }
}
