import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait'

@Pipe({
  name: 'destinationMexique'
})
export class DestinationMexiquePipe implements PipeTransform {

transform(forfaits: Forfait[]): Forfait[] {

    return forfaits.filter(forfait => forfait.destination === 'Mexique');
  }

}
