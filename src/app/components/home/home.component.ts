import { Component, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None, // Cambia aquí a None
})
export class HomeComponent {

  imagenes = [
    {
      principal: '../../../assets/productsHome/ElefantesJuego.png',
      secundaria: '../../../assets/productsHome/ElefantesJuegoBack.png',
      hover: false
    },
    {
      principal: '../../../assets/productsHome/GallinaHuevera.png',
      secundaria: '../../../assets/productsHome/henBack.png',
      hover: false
    },
    {
      principal: '../../../assets/productsHome/JuegoBudas.png',
      secundaria: '../../../assets/productsHome/budasGameBack.png',
      hover: false
    },
    {
      principal: '../../../assets/productsHome/JuegoGirasoles.png',
      secundaria: '../../../assets/productsHome/JuegoGirasolesBack.png',
      hover: false
    }
  ];

  imagenesTwo = [
    {
      principal: '../../../assets/productsHome/Vaquita.jpg',
      secundaria: '../../../assets/productsHome/backCow.png',
      hover: false
    },
    {
      principal: './../../assets/productsHome/elephantsFront.png',
      secundaria: '../../../assets/productsHome/elephantsBack.png',
      hover: false
    },
    {
      principal: '../../../assets/productsHome/Pony&Perro.png',
      secundaria: '../../../assets/productsHome/backPony&Dog.png',
      hover: false
    },
    {
      principal: '../../../assets/productsHome/DosMorenas.png',
      secundaria: '../../../assets/productsHome/brunettesBack.png',
      hover: false
    }
  ];


  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2

  ){}

    ngOnInit(){

    }

    cambiarEstadoImg1(index: number) {
      this.imagenes[index].hover = !this.imagenes[index].hover;
    }

    cambiarEstadoImg2(index: number) {
      this.imagenesTwo[index].hover = !this.imagenesTwo[index].hover;
    }



}
