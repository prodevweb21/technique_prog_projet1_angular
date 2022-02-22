import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';




@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {

  forfaits: Forfait[] = [];

  true = 1;
  false = 0;

  constructor(private forfaitService: ForfaitService ) { }

  ngOnInit(): void {
    this.getForfaits()
  }
    
  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }
}
