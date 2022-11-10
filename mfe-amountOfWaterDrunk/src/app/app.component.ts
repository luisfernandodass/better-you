import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe-amountOfWaterDrunk';
  ml = 0;

  addWater(): void {
    this.ml = this.ml + 400;
  }
}
