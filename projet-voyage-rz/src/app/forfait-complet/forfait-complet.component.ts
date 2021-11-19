import { Component, Input, OnInit } from '@angular/core';
import { EtoilesComponent } from '../etoiles/etoiles.component';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';




@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {

 

  // @Input() fortait?:Forfait;
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
