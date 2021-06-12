import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
