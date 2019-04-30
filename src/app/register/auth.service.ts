import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {AuthData} from "./auth-data-model"
@Injectable({providedIn:"root"})
export class AuthService{
    constructor(private http: HttpClient){}
    createUser(email:string, password:string, type: string){
        const authData: AuthData = {email:email, password:password, type:type}
        this.http.post("http://localhost:4200/user/investor/signup", authData )
        .subscribe(response =>{
            console.log(response);
        });
    }
}
