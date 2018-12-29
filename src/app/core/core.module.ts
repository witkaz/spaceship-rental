import { NavbarComponent } from './components/navbar/navbar.component';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

const components = [
  NavbarComponent
];
const imports = [];
const modules = [
];
const providers = [];
const exported = [];

@NgModule({
  declarations: components,
  imports: modules,
  exports: [...components],
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
