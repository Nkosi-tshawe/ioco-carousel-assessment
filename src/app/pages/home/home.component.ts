import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  slideItems;

  ngOnInit(): void {
    this.slideItems = [
      {
        id: 1,
        src: 'https://via.placeholder.com/600/92c952',
        alt: 'Mobile Internet',
        title: 'Mobile Internet',
      },
      {
        id: 2,
        src: 'https://via.placeholder.com/600/771796',
        alt: 'Home Internet',
        title: 'Home Internet',
        width: '162',
      },
      {
        id: 3,
        src: 'https://via.placeholder.com/600/24f355',
        alt: 'Get a device',
        title: 'Get a device',
        width: '162',
      },
      {
        id: 4,
        src: 'https://via.placeholder.com/600/d32776',
        alt: 'Add a phone-line',
        title: 'Add a phone-line',
        width: '162',
      },
      {
        id: 5,
        src: 'https://via.placeholder.com/600/f66b97',
        alt: 'Upgrade',
        title: 'Upgrade',
        width: '162',
      },
    ];
  }
}
