import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductsComponent } from './components/products/products.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/products/details/details.component';
import { BuyProductComponent } from './components/products/buy-product/buy-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'QuienesSomos', component: AboutUsComponent },
  { path: 'SobreNosotros', component: HistoryComponent },
  { path: 'Productos', component: ProductsComponent },
  { path: 'Contactanos', component: ContactUsComponent },
  { path: 'Productos/Detalle/:id', component: DetailsComponent },
  { path: 'Productos/Comprar/:id', component: BuyProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
