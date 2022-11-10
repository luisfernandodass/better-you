import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  selectMfe(event: Event): void {
    (event.currentTarget as HTMLElement).classList.toggle('btn-active-mfe');
  }
}
