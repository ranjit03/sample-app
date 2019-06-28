import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { UserComponent } from './user/user.component';
import { SampleService } from './sample.service'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
