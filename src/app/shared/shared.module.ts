import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const declarations = [];
const imports = [
  CommonModule
];
const exported = [
  ...declarations,
  CommonModule
];

@NgModule({
  declarations,
  imports,
  exports: exported
})
export class SharedModule {}
