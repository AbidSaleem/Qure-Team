import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/layout/header/header.component';

import {FooterComponent} from './common/layout/footer/footer.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {NewsComponent} from './pages/news/news.component';
import {HomeComponent} from './pages/home/home.component';
import {BlogComponent} from './pages/blog/blog.component';
import {FreeTrialComponent} from './pages/free-trial/free-trial.component';
import {LayoutComponent} from './common/layout/layout.component';
import {ContactComponent} from './pages/contact/contact.component';
import {LoginComponent} from './common/security/login/login.component';
import {AuthGuard} from './common/security/services/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignUpComponent} from './common/security/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from './common/alert/alert.component';
import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './common/interceptors';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    BlogComponent,
    FreeTrialComponent,
    LayoutComponent,
    ContactComponent,
    SignUpComponent,
    AlertComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
