import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginModuleModule } from '../app/login-module/login-module.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor()
  {
     console.log("Hey i am module");
     
  }

}
