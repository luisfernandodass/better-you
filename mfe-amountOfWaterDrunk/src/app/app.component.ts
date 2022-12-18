import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public ml = 0;
  public qntdToBeIncreasedOrDecreased = 400;
  public goalOfTheDay = 2000;
  public goalOfTheDayAchieved = false;
  @ViewChild('boxStatusMsg') iconClose!: ElementRef<HTMLElement>;

  public increaseAmountOfWater(): void {
    if (this.ml !== this.goalOfTheDay) {
      this.ml = this.ml + this.qntdToBeIncreasedOrDecreased;

      if (this.ml === this.goalOfTheDay) { this.goalOfTheDayAchieved = true; }
    }
  }

  public decreaseAmountOfWater(): void {
    if (this.ml === 0) { return; }
    this.ml = this.ml - this.qntdToBeIncreasedOrDecreased;
    this.goalOfTheDayAchieved = false;
  }

  public closeBoxStatusMessage() {
    this.iconClose.nativeElement.style.display = 'none'
  }

}
