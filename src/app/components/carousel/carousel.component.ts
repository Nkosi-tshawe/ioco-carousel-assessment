// Angular
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-light-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private el: ElementRef) {}

  activeSlide;
  currentSlide: number = 1;
  indexNumber = 1;
  slider: any = null;
  config:Slick.Config;

  @Input() title: string = '';
  @Input() slideItems: any = [];
  @Input() configOptions:Slick.Config ;

  // Public methods
  public ngAfterViewInit() {}

  public ngOnDestroy() {}
  public ngOnInit() {
    if (this.configOptions) {
      this.config = this.configOptions;
    }else {
      this.config = {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              adaptiveHeight: false,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 999,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              adaptiveHeight: false,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              adaptiveHeight: false,
              slidesToShow: 5,
            },
          },
        ],
      };

    }
  }
}
