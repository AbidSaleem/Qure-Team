import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewsComponent } from './pages/news/news.component';
import { FreeTrialComponent } from './pages/free-trial/free-trial.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginLayoutComponent } from './Login/login-layout/login-layout.component';
import { AuthGuard } from './guard-auth/auth.guard';
import { SignUpComponent } from './Login/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', canActivate: [AuthGuard], component: AboutUsComponent},
  {path: 'news', canActivate: [AuthGuard], component: NewsComponent},
  {path: 'blog', canActivate: [AuthGuard], component: BlogComponent},
  {path: 'free-trial', canActivate: [AuthGuard], component: FreeTrialComponent},
  {path: 'contact', canActivate: [AuthGuard], component: ContactComponent},
  {path: 'login', component: LoginLayoutComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  /* {path: '*', component: ErrorComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
