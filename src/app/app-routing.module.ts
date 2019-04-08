import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {NewsComponent} from './pages/news/news.component';
import {FreeTrialComponent} from './pages/free-trial/free-trial.component';
import {BlogComponent} from './pages/blog/blog.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AuthGuard} from './common/security/services/auth.guard';
import {LoginComponent} from './common/security/login/login.component';
import {SignUpComponent} from './common/security/sign-up/sign-up.component';

const routes: Routes = [

  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutUsComponent, canActivate: [AuthGuard]},
  {path: 'news', component: NewsComponent, canActivate: [AuthGuard]},
  {path: 'blog', component: BlogComponent, canActivate: [AuthGuard]},
  {path: 'free-trial', component: FreeTrialComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
