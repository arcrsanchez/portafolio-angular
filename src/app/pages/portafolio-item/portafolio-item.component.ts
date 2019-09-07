import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Productos } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.css']
})
export class PortafolioItemComponent implements OnInit {

  producto: Productos;
  id: string;

  constructor(private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.productosService.getProducto(parametros.id)
          .subscribe( (producto: Productos) => {
            this.id = parametros.id;
            this.producto = producto;
          });

      });
  }

}
