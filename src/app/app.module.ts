import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { EmailBoxComponent } from './email-box/email-box.component';
import { EmailPreviewComponent } from './email-preview/email-preview.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SummaryPipe } from './summary.pipe';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    EmailBoxComponent,
    EmailPreviewComponent,
    EmailDetailComponent,
    ContactsComponent,
    PreferencesComponent,
    NotFoundComponent,
    NavBarComponent,
    SummaryPipe,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
