import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto.model';

@Pipe({
  name: 'totalCarrito',
  pure: false
})
export class TotalCarritoPipe implements PipeTransform {
  transform(items: Producto[] | null): number {
    if (!items) return 0;
    return items.reduce((total, item) => total + (item.precio * (item.cantidad || 1)), 0);
  }
}