import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../src/app/models/producto.model';
import { CarritoService } from '../../src/app/services/carrito.service';

@Component({
  selector: 'app-carrito-resumen',
  templateUrl: './carrito-resumen.component.html',
  styleUrls: ['./carrito-resumen.component.css']
})
export class CarritoResumenComponent implements OnInit {
  carrito$!: Observable<Producto[]>;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carrito$ = this.carritoService.carrito$;
  }

  cambiarCantidad(id: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const nuevaCantidad = parseInt(input.value, 10);
    this.carritoService.actualizarCantidad(id, nuevaCantidad);
  }

  eliminar(id: number): void {
    this.carritoService.eliminarProducto(id);
  }
}