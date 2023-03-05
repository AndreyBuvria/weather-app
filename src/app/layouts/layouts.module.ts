import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { MainLayoutComponent } from './main';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutsModule { }
