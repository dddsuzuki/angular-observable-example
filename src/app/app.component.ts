import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { ApiService } from './api.service';
import { ConsoleService } from './console.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  logs$ = this.console.logs$;

  constructor(
    private apiService: ApiService,
    private console: ConsoleService
  ) {}

  testSubscribe(): void {
    this.console.log('start');
    this.apiService.fetch().subscribe({
      next: () => {
        this.console.log('next');
      },
      error: () => {
        this.console.log('error');
      },
      complete: () => {
        this.console.log('complete');
      },
    });
  }

  testSubscribeError(): void {
    this.console.log('start');
    this.apiService.fetchError().subscribe({
      next: () => {
        this.console.log('next');
      },
      error: () => {
        this.console.log('error');
      },
      complete: () => {
        this.console.log('complete');
      },
    });
  }

  testFinalize(): void {
    this.console.log('start');
    this.apiService
      .fetch()
      .pipe(
        finalize(() => {
          this.console.log('finalize');
        })
      )
      .subscribe({
        next: () => {
          this.console.log('next');
        },
        error: () => {
          this.console.log('error');
        },
        complete: () => {
          this.console.log('complete');
        },
      });
  }

  testFinalizeError(): void {
    this.console.log('start');
    this.apiService
      .fetchError()
      .pipe(
        finalize(() => {
          this.console.log('finalize');
        })
      )
      .subscribe({
        next: () => {
          this.console.log('next');
        },
        error: () => {
          this.console.log('error');
        },
        complete: () => {
          this.console.log('complete');
        },
      });
  }

  testAdd(): void {
    this.console.log('start');
    this.apiService
      .fetch()
      .subscribe({
        next: () => {
          this.console.log('next');
        },
        error: () => {
          this.console.log('error');
        },
        complete: () => {
          this.console.log('complete');
        },
      })
      .add(() => {
        this.console.log('add');
      });
  }

  testAddError(): void {
    this.console.log('start');
    this.apiService
      .fetchError()
      .subscribe({
        next: () => {
          this.console.log('next');
        },
        error: () => {
          this.console.log('error');
        },
        complete: () => {
          this.console.log('complete');
        },
      })
      .add(() => {
        this.console.log('add');
      });
  }

  testFinalizeAndAdd(): void {
    this.console.log('start');
    this.apiService
      .fetch()
      .pipe(
        finalize(() => {
          this.console.log('finalize');
        })
      )
      .subscribe({
        next: () => {
          this.console.log('next');
        },
        error: () => {
          this.console.log('error');
        },
        complete: () => {
          this.console.log('complete');
        },
      })
      .add(() => {
        this.console.log('add');
      });
  }

  testFinalizeAndAddError(): void {
    this.console.log('start');
    this.apiService
      .fetchError()
      .pipe(
        finalize(() => {
          this.console.log('finalize');
        })
      )
      .subscribe({
        next: () => {
          this.console.log('next');
        },
        error: () => {
          this.console.log('error');
        },
        complete: () => {
          this.console.log('complete');
        },
      })
      .add(() => {
        this.console.log('add');
      });
  }

  clearLogs(): void {
    this.console.clear();
  }
}
