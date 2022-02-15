import { Component, OnInit } from '@angular/core';
import { Forfait } from './forfait';
import { FORFAITS } from './mock-forfaits';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  forfaits : Forfait[] = FORFAITS;

  title = 'projet-voyage-rz';

  forfait: Forfait = {
    id:'1',
    destination: 'Mexique',
    ville_de_depart: 'Québec', 
    hotel:{
      nom_hotel: 'Hilton',
      coordonnees: '...',
      nombre_etoiles: 6,
      nombre_chambres: 100,
      caracteristiques: ['Face à la plage', 'Ascenseur', 'Miniclub']
    },
    date_de_depart: '2021-01-01',
    date_de_retour: '2020-01-08',
    prix: 500, 
    rabais: 100,
    vedette: true,

    }

    
}
