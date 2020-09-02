import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EnvServiceProvider } from './service/env.service.provider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
