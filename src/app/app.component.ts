import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  testSubscribe(): void {
    console.log('subscribe');
    this.apiService.fetch().subscribe({
      next: () => {
        console.log('next');
      },
      error: () => {
        console.log('error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  testSubscribeError(): void {
    console.log('subscribe');
    this.apiService.fetchError().subscribe({
      next: () => {
        console.log('next');
      },
      error: () => {
        console.log('error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  testFinalize(): void {
    console.log('subscribe');
    this.apiService
      .fetch()
      .pipe(
        finalize(() => {
          console.log('finalize');
        })
      )
      .subscribe({
        next: () => {
          console.log('next');
        },
        error: () => {
          console.log('error');
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  testFinalizeError(): void {
    console.log('subscribe');
    this.apiService
      .fetchError()
      .pipe(
        finalize(() => {
          console.log('finalize');
        })
      )
      .subscribe({
        next: () => {
          console.log('next');
        },
        error: () => {
          console.log('error');
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  testAdd(): void {
    console.log('subscribe');
    this.apiService
      .fetch()
      .subscribe({
        next: () => {
          console.log('next');
        },
        error: () => {
          console.log('error');
        },
        complete: () => {
          console.log('complete');
        },
      })
      .add(() => {
        console.log('add');
      });
  }

  testAddError(): void {
    console.log('subscribe');
    this.apiService
      .fetchError()
      .subscribe({
        next: () => {
          console.log('next');
        },
        error: () => {
          console.log('error');
        },
        complete: () => {
          console.log('complete');
        },
      })
      .add(() => {
        console.log('add');
      });
  }

  testFinalizeAndAdd(): void {
    console.log('subscribe');
    this.apiService
      .fetch()
      .pipe(
        finalize(() => {
          console.log('finalize');
        })
      )
      .subscribe({
        next: () => {
          console.log('next');
        },
        error: () => {
          console.log('error');
        },
        complete: () => {
          console.log('complete');
        },
      })
      .add(() => {
        console.log('add');
      });
  }

  testFinalizeAndAddError(): void {
    console.log('subscribe');
    this.apiService
      .fetchError()
      .pipe(
        finalize(() => {
          console.log('finalize');
        })
      )
      .subscribe({
        next: () => {
          console.log('next');
        },
        error: () => {
          console.log('error');
        },
        complete: () => {
          console.log('complete');
        },
      })
      .add(() => {
        console.log('add');
      });
  }
}
