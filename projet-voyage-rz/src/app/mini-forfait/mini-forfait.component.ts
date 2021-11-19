import { Component, OnInit } from '@angular/core';
import { reduceEachLeadingCommentRange } from 'typescript';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';



@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {

  forfaits : Forfait[] = FORFAITS;


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

  constructor() { }

  ngOnInit(): void {
  }

}
