// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom Modules
import { AppRoutingModule } from 'src/app/app-routing.module';

// Custom Components
import { AppComponent } from 'src/app/app.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

// Carousel
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
