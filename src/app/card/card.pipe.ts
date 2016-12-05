import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {
  cardValues: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  transform(value: number): string {
    if (value) {
      return this.cardValues[value - 1];
    }
    return '';
  }
}
