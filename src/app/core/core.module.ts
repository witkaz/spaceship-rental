import { NavbarComponent } from './components/navbar/navbar.component';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SpaceshipService } from './services/spaceship.service';
import { SpaceshipsListResolver } from './resolvers/spaceships-list.resolver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpaceshipsDetailResolver } from './resolvers/spaceships-detail.resolver';

const declarations = [
  NavbarComponent
];
const imports = [
  HttpClientModule,
  CommonModule
];
const providers = [
  SpaceshipService,
  SpaceshipsListResolver,
  SpaceshipsDetailResolver
];
const exports = [
  ...declarations
];

@NgModule({
  declarations,
  imports,
  exports
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
