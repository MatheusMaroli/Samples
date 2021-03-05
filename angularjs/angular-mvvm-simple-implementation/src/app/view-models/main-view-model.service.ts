import { Injectable } from '@angular/core';
import MainModel from '../models/mainModel';
import {NotificationViewModelService} from './notification-view-model.service';

@Injectable({
  providedIn: 'root'
})
export class MainViewModelService {

  currentMain : MainModel = new MainModel(0, '');
  data : MainModel[] = [];
  
  constructor(private notificationService : NotificationViewModelService) { 
    this.data.push(new MainModel(1, "main 1"));
    this.data.push(new MainModel(2, "main 2"));
    this.data.push(new MainModel(3, "main 3"));
    this.data.push(new MainModel(4, "main 4"));
    this.data.push(new MainModel(5, "main 5"));
  }

  addCurrentMain()
  {
    if (this.currentMain.id <= 0)
    {
      this.notificationService.showError("invalid id");
      return;
    }

    if (! this.currentMain.name)
    {
      this.notificationService.showError("invalid name");
      return;
    }

    this.data.push(new MainModel(this.currentMain.id, this.currentMain.name));
    this.currentMain.reset();
    this.notificationService.showSuccess("Main model added")
  }

}
