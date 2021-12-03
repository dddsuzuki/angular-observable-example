import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ConsoleLog {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConsoleService {
  private logs = new BehaviorSubject<ConsoleLog[]>([]);

  get logs$() {
    return this.logs.asObservable();
  }

  constructor() {}

  log(message: string): void {
    this.logs.next([...this.logs.value, { message }]);
  }

  clear(): void {
    this.logs.next([]);
  }
}
