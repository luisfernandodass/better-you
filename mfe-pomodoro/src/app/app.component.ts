import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';

interface Timer {
  minutes: number,
  seconds: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  defaultTimer = { minutes: 25, seconds: 0 };
  defaultSeconds = 59;
  timer$!: Subscription;
  itStartedByFirstTime = false;
  itHasStopped = false;
  @ViewChild('boxStatusMsg') iconClose!: ElementRef<HTMLElement>;

  public restartTimer(): Timer {
    this.itHasStopped = false;
    this.startTimer();
    return this.defaultTimer = { minutes: 25, seconds: 0 }
  }

  public startTimer(): void {
    this.itStartedByFirstTime = true;
    this.itHasStopped = false;

    if (this.defaultTimer.seconds === 0) {
      this.defaultTimer.minutes--;
      this.defaultTimer.seconds = this.defaultSeconds;
    }

    this.timer$ = interval(1000).subscribe(() => {
      this.defaultTimer.seconds--;

      if (this.defaultTimer.seconds === 0) {
        this.defaultTimer.minutes--;
        this.defaultTimer.seconds = this.defaultSeconds;
      }

      if (this.defaultTimer.minutes === 0) {
        this.timer$.unsubscribe();
        this.defaultTimer.seconds = 0;
      }
    });
  }

  public pauseTimer(): void {
    this.timer$.unsubscribe();
    this.itHasStopped = true;
  }

  public closeBoxStatusMessage(): void {
    this.iconClose.nativeElement.style.display = 'none';
  }
}
