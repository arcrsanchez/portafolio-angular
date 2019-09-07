import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdx } from '../interfaces/productos_idx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductosIdx[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();

  }
  cargarProductos() {
    this.http.get('https://angular-html-53b77.firebaseio.com/productos_idx.json')
      .subscribe((resp: ProductosIdx[]) => {
        console.log(this.productos);

        setTimeout(() => {
          this.productos = resp;
          this.cargando = false;
        }, 1000);

      });
  }

}
