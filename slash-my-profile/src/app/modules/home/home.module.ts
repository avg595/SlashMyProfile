import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserFormModule } from '../user-form/user-form.module';
import { MapModule } from '../map/map.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    UserFormModule,
    MapModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
