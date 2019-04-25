import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { FeedComponent } from './feed/feed.component';
import { InvestorProfileComponent } from './investor-profile/investor-profile.component';
import { InvesteeProfileComponent } from './investee-profile/investee-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    FeedComponent,
    InvestorProfileComponent,
    InvesteeProfileComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
