import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainViewComponent
  ]
})
export class ViewsModule { }
