import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationViewModelService {


  constructor() { }

  showError(message: string)
  {
    alert("Invalid Operation. Message ===> "+ message);
  }

  showSuccess(message: string)
  {
    alert("SuccessOperation. Message ===> " + message);
  }

}
