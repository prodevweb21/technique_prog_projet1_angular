import { Component } from '@angular/core';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { Forfait } from './forfait';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // starRating = 0;
  title = 'projet-voyage-rz';

  forfait: Forfait = {
    id:'1',
    destination: 'Mexique',
    villeDepart: 'Québec', 
    hotel:{
      nomHotel: 'Hilton',
      coordonnees: '...',
      nombreEtoiles: 6,
      nombreChambres: 100,
      caracteristique: ['Face à la plage', 'Ascenseur', 'Miniclub']
    },
    dateDepart: '2021-01-01',
    dateRetour: '2020-01-08',
    prix: 500, 
    rabais: 100,
    vedette: true,
    color: 'red',

    }
}
