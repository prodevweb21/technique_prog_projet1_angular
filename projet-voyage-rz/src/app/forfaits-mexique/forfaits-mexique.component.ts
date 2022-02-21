import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';


@Component({
  selector: 'app-forfaits-mexique',
  templateUrl: './forfaits-mexique.component.html',
  styleUrls: ['./forfaits-mexique.component.css']
})
export class ForfaitsMexiqueComponent implements OnInit {

  forfaits: Forfait[] = [];

  true = 1;
  false = 0;
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits()
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }

}
