import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-liste-forfait',
  templateUrl: './liste-forfait.component.html',
  styleUrls: ['./liste-forfait.component.css']
})
export class ListeForfaitComponent implements OnInit {

  forfaits : Forfait[] = FORFAITS;


  forfait: Forfait = {
    id:'1',
    destination: 'Mexique',
    villeDepart: 'Québec',
    hotel:{
      nomHotel: 'Hilton',
      coordonnees: '2546 Boulevard des Pierres Mexico City ',
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




  constructor() { }

  ngOnInit(): void {
  }

}
