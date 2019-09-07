import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdx } from '../interfaces/productos_idx.interface';
import { Productos } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductosIdx[] = [];
  productosFiltrado: ProductosIdx[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();

  }
  private cargarProductos() {

    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-53b77.firebaseio.com/productos_idx.json')
        .subscribe((resp: ProductosIdx[]) => {
          setTimeout(() => {
            this.productos = resp;
            this.cargando = false;
            resolve();
          }, 1000);

        });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-53b77.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // ejecutar despues de tener los productos
        // Aplicar filtrado
        this.filtrarProductos(termino);
      });
    } else {
      // Aplicar el filtrado
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {

    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push(prod);
      }
    });
  }

}
