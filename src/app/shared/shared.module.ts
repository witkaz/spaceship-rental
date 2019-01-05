import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const declarations = [];
const imports = [
  CommonModule
];
const exports = [
  ...declarations,
  CommonModule
];

@NgModule({
  declarations,
  imports,
  exports
})
export class SharedModule {}
