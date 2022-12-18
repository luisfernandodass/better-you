import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'http://127.0.0.1:8080/dist/mfe-amount-of-water-drunk/main.js';
    document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = 'http://127.0.0.1:8080/dist/mfe-amount-of-water-drunk/main.js';
    document.body.appendChild(script2);
  }

  selectMfe(event: Event): void {
    (event.currentTarget as HTMLElement).classList.toggle('btn-active-mfe');
  }
}
