import { Injectable } from '@angular/core';
import { map, Observable, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  fetch(): Observable<{ message: string }> {
    return timer(2000).pipe(map(() => ({ message: 'foo' })));
  }

  fetchError(): Observable<{ message: string }> {
    return timer(2000).pipe(
      map(() => ({ message: 'foo' })),
      tap(() => {
        throw new Error();
      })
    );
  }
}
