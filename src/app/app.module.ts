import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SpaceshipsModule } from './features/spaceships/spaceships.module';

const declarations = [
  AppComponent
];

const modules = [
  BrowserModule,
  CoreModule,
  SpaceshipsModule,
  AppRoutingModule
];

const providers = [];

@NgModule({
  declarations,
  imports: modules,
  bootstrap: [AppComponent],
})
export class AppModule {}
