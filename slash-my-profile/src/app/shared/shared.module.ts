import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { CardModule } from 'primeng/card';
import { ProfileComponent } from './components/profile/profile.component';

const materialModules = [
  MatToolbarModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule
]

const primeNgModules = [
  CardModule
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    ...primeNgModules
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileComponent,
    ...materialModules,
    ...primeNgModules
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
