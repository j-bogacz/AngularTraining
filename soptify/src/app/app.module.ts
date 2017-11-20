import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {test} from "./test.component";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, test
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
