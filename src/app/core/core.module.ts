import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

const declarations = [];
const imports = [];
const providers = [];
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
