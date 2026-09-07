import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtotal'
})
export class SubtotalPipe implements PipeTransform {
  transform(precio: number, cantidad: number = 1): number {
    return precio * cantidad;
  }
}