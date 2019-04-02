import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {NewsComponent} from './pages/news/news.component';
import {FreeTrialComponent} from './pages/free-trial/free-trial.component';
import {BlogComponent} from './pages/blog/blog.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AuthGuard} from './common/security/services/auth.guard';
import { LoginComponent } from './common/security/login/login.component';
import { SignUpComponent } from './common/security/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';

const routes: Routes = [
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'about', canActivate: [AuthGuard], component: AboutUsComponent},
  {path: 'news', canActivate: [AuthGuard], component: NewsComponent},
  {path: 'blog', canActivate: [AuthGuard], component: BlogComponent},
  {path: 'free-trial', canActivate: [AuthGuard], component: FreeTrialComponent},
  {path: 'contact', canActivate: [AuthGuard], component: ContactComponent},
  {path: 'entry', component: EntryComponent, 
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signUp', component: SignUpComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: 'entry', pathMatch: 'full'},
  /* {path: '*', component: ErrorComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
