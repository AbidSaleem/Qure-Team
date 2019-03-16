import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/home-header/header.component';

import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsComponent } from './pages/news/news.component';
import { HomeBodyComponent } from './pages/home/home-body/home-body.component';
import {BlogComponent} from './pages/blog/blog.component'
import {FreeTrialComponent} from './pages/free-trial/free-trial.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignInComponent } from './Login/sign-in/sign-in.component';
import { SignUpComponent } from "./Login/sign-up/sign-up.component";
import { LoginLayoutComponent } from './Login/login-layout/login-layout.component'
import { AuthGuard } from './guard-auth/auth.guard';
import { LogInService } from './logIn-service/log-in.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    HomeBodyComponent,
    BlogComponent,
    FreeTrialComponent,
    LayoutComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AuthGuard,
    LogInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
