import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './http.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { OldcustomerComponent } from './oldcustomer/oldcustomer.component';
import { ChatComponent } from './chat/chat.component';
// import { CustomerinfoComponent } from './customerinfo/customerinfo.component';

const appRoutes: Routes = [
  { path: 'newcustomer', component: NewcustomerComponent },
  { path: 'oldcustomer', component: OldcustomerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewcustomerComponent,
    OldcustomerComponent,
    ChatComponent,
    // CustomerinfoComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }