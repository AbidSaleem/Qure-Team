import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/layout/header/header.component';

import {FooterComponent} from './common/layout/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {NewsComponent} from './pages/news/news.component';
import {HomeBodyComponent} from './pages/home/home-body/home-body.component';
import {BlogComponent} from './pages/blog/blog.component'
import {FreeTrialComponent} from './pages/free-trial/free-trial.component';
import {LayoutComponent} from './common/layout/layout.component';
import {ContactComponent} from './pages/contact/contact.component';
import {LoginComponent} from './common/security/login/login.component';
import {AuthGuard} from './common/security/services/auth.guard';
import {LogInService} from './common/security/services/log-in.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignUpComponent } from './common/security/sign-up/sign-up.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
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
    LoginComponent,
    SignUpComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    LogInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
