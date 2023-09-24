import { Component, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None, // Cambia aquí a None
})
export class HomeComponent {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2

  ){}

  // ngAfterViewInit() {
  //   const imgProducts = this.elRef.nativeElement.querySelectorAll('.img-product');

  //   imgProducts.forEach(product => {
  //     this.renderer.listen(product, 'click', () => {
  //       const img = product.querySelector('img');
  //       if (img) {
  //         this.renderer.setStyle(img, 'transform', 'scale(1.2)');
  //       }
  //     });
  //   });
  // }



}
