import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { IconGridComponent } from './icon-grid/icon-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ProductsComponent,
    FooterComponent,
    FeaturesComponent,
    IconGridComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
