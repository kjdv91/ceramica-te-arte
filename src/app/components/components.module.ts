import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HistoryComponent } from './history/history.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './products/details/details.component';
import { BuyProductComponent } from './products/buy-product/buy-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule






@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HistoryComponent,
    ContactUsComponent,
    ProductsComponent,
    HomeComponent,
    DetailsComponent,
    BuyProductComponent,



  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxImageZoomModule,
    FormsModule,

  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HistoryComponent,
    ContactUsComponent,
    ProductsComponent,
    HomeComponent,

  ]
})
export class ComponentsModule { }
