import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const declarations = [
  AppComponent
];

const imports = [
  BrowserModule,
  CoreModule.forRoot()
];

const providers = [];

@NgModule({
  declarations,
  imports,
  bootstrap: [AppComponent]
})
export class AppModule {}
