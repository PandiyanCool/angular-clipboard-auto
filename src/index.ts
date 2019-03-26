import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyDirective } from "./copy.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CopyDirective
  ],
  exports: [
    CopyDirective
  ]
})
export class ClipboardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ClipboardModule,
      providers: []
    };
  }
}
