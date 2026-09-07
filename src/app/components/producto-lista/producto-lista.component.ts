import { Component } from '@angular/core';
import { Producto } from '../../src/app/models/producto.model';
import { CarritoService } from '../../src/app/services/carrito.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', precio: 25.00, imagenUrl: 'assets/img/prod1.jpg' },
    { id: 2, nombre: 'Producto 2', precio: 40.50, imagenUrl: 'assets/img/prod2.jpg' },
    { id: 3, nombre: 'Producto 3', precio: 15.99, imagenUrl: 'assets/img/prod3.jpg' }
  ];

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
  }
}