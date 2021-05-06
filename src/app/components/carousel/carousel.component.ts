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

  config = {
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
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          adaptiveHeight: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 999,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          adaptiveHeight: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          adaptiveHeight: false,
          slidesToShow: 5,
        },
      },
    ],
  };

  @Input() title: string = '';
  @Input() slideItems: any = [];

  // Public methods
  public ngAfterViewInit() {}

  public ngOnDestroy() {}
  public ngOnInit() {}
}
