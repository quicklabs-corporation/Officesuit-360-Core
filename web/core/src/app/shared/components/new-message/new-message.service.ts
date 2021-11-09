import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewMessageService {
  newMessageSubscriber: Subject<boolean> = new Subject();
  constructor() { }

  openNewMessage() {
    this.newMessageSubscriber.next(true);
  }

  listenToAction(): Observable<any> {
    return this.newMessageSubscriber.asObservable();
  }
}
