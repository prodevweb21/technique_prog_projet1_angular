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

  forfaits : Forfait[] = FORFAITS;

  

  result= 400 - 50;

  constructor() { }

  ngOnInit(): void {
  }

  
}
