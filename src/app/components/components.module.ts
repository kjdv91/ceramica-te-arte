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




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HistoryComponent,
    ContactUsComponent,
    ProductsComponent,
    HomeComponent,


  ],
  imports: [
    CommonModule,

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
