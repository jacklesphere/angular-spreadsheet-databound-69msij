import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/dist/types';

@Injectable()
export class SuggestionService {
  constructor() {}
  aResponse: Subject<string> = new Subject<string>();
  count: number = 0;

  getSuggestionData(address: string): void {
    this.count = this.count + 1;
    setTimeout(() => {}, 1000);
    console.log('service called');
    this.aResponse.next(this.count + ' updated cell value ' + address);
    // const observable = new Observable<string>(observer => {
    //   setTimeout(() => {}, 1000);
    //   observer.emit(this.count + ' updated cell value ' + address);
    // });
    // return observable;
  }
}
