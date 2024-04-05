import { Component , OnInit} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  product: any;
  constructor (private dataService: ProductsService){

  }


  ngOnInit() {
    this.dataService.currentProduct.subscribe(product => {
      if (product) {
        this.product = product;
      } else {
        // Manejar el caso cuando no hay producto seleccionado.
        // Podrías redirigir al usuario de vuelta a la página de productos o mostrar un mensaje.
      }
    });
  }

}
