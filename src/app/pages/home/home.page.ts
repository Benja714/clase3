import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  rut:String = "312123231";
  nombreCompleto:String = "";
  edad:BigInteger;

  cambiarDatos(){
    alert('pincho boton')

    

  }

}
