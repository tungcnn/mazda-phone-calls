import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallListComponent } from './view/call-list/call-list.component';
import { CallInUseComponent } from './view/call-in-use/call-in-use.component';

@NgModule({
  declarations: [
    AppComponent,
    CallListComponent,
    CallInUseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
