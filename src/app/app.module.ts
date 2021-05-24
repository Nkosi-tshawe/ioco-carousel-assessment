// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom Modules
import { AppRoutingModule } from './app-routing.module';

// Custom Components
import { AppComponent } from './app.component';
// import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

// Carousel
import { LightCarouselModule } from '@tagron/light-carousel';

@NgModule({
  declarations: [
    AppComponent,
    // CarouselComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    LightCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
