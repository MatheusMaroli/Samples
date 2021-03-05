import { Component, OnInit } from '@angular/core';
import { MainViewModelService } from 'src/app/view-models/main-view-model.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html'
})
export class MainViewComponent implements OnInit {

   
  constructor(public vm : MainViewModelService) { 
    
  }

  ngOnInit(): void {
  }

}
