import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewChatService {
  newChatSubscriber: Subject<boolean> = new Subject();
  constructor() { }

  openNewChat() {
    this.newChatSubscriber.next(true);
  }

  listenToAction(): Observable<any> {
    return this.newChatSubscriber.asObservable();
  }
}
