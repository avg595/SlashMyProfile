import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ...materialModules
  ],
  exports: [
    FontAwesomeModule,
    ...materialModules
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
        ngModule: SharedModule,
        providers: []
    };
  }
}
