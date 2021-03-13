import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'messages/inbox',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'messages',
    redirectTo: 'messages/inbox',
    pathMatch: 'full',
  },
  {
    path: 'messages/:id',
    component: MessagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: EmailDetailComponent,
    outlet: 'detail',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
