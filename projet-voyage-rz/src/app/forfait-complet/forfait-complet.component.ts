import { Component, Input, OnInit } from '@angular/core';
import { EtoilesComponent } from '../etoiles/etoiles.component';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
// import { FORFAITS } from '../mock-forfaits';




@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {

  titre = 'La liste complètes des forfaits'


  true = 1;
  false = 0;

  forfaits: Forfait[] = [];

  constructor(private forfaitService: ForfaitService ) { }

  ngOnInit(): void {
    this.getForfaits()
  }
    
  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
  
}
