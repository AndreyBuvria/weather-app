import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared';
import { MapComponent } from './components';
import { MapDirective } from './components/map/directives';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    MapDirective
  ],
  imports: [
    SharedModule,
    HomeRouting
  ]
})
export class HomeModule { }
