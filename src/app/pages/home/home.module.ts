import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRouting
  ]
})
export class HomeModule { }
