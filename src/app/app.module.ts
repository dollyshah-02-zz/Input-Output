import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputModule } from './input/input.module';
import { OutputModule } from './output/output.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputModule,
    OutputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
