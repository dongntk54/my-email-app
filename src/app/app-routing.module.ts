import { EmailDetailComponent } from './email-detail/email-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'messages/inbox',
    pathMatch: 'full',
  },
  {
    path: 'messages',
    redirectTo: 'messages/inbox',
    pathMatch: 'full',
  },
  {
    path: 'messages/:id',
    component: MessagesComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
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
