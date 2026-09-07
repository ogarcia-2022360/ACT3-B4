import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private elementosCarrito: Producto[] = [];
  private carritoSubject = new BehaviorSubject<Producto[]>([]);

  carrito$: Observable<Producto[]> = this.carritoSubject.asObservable();

  agregarProducto(producto: Producto): void {
    const existe = this.elementosCarrito.find(p => p.id === producto.id);
    if (existe) {
      existe.cantidad = (existe.cantidad || 1) + 1;
    } else {
      this.elementosCarrito.push({ ...producto, cantidad: 1 });
    }
    this.notificarCambios();
  }

  actualizarCantidad(idProducto: number, cantidad: number): void {
    const producto = this.elementosCarrito.find(p => p.id === idProducto);
    if (producto) {
      producto.cantidad = cantidad;
      if (producto.cantidad <= 0) {
        this.eliminarProducto(idProducto);
        return;
      }
      this.notificarCambios();
    }
  }

  eliminarProducto(idProducto: number): void {
    this.elementosCarrito = this.elementosCarrito.filter(p => p.id !== idProducto);
    this.notificarCambios();
  }

  private notificarCambios(): void {
    this.carritoSubject.next([...this.elementosCarrito]);
  }
}