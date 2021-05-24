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
        src: 'https://via.placeholder.com/600',
        alt: 'Mobile Internet',
        title: 'Mobile Internet',
      },
      {
        id: 2,
        src: 'https://via.placeholder.com/600',
        alt: 'Home Internet',
        title: 'Home Internet',
        url: '#',
      },
      {
        id: 3,
        src: 'https://via.placeholder.com/600',
        alt: 'Get a device',
        title: 'Get a device',
        url: '//#region ',
      },
      {
        id: 4,
        src: 'https://via.placeholder.com/600',
        alt: 'Add a phone-line',
        title: 'Add a phone-line',
        url: '#',
      },
      {
        id: 5,
        src: 'https://via.placeholder.com/600',
        alt: 'Upgrade',
        title: 'Upgrade',
        url: '#',
      },
    ];
  }
}
