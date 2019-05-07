import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { InvesteeService } from '../services/investee.service';
import { InvestorService } from '../services/investor.service';
import { Token } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // constructor(private investeeService: InvesteeService,
  //             private investorService: InvestorService,
  //             private registerComponent: RegisterComponent ) {}

  constructor(private tokenService: Token) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.tokenService.getToken();
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    return next.handle(newRequest);
  }
}
