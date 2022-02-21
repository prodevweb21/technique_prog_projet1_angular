import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';



@Component({
  selector: 'app-forfaits-cuba',
  templateUrl: './forfaits-cuba.component.html',
  styleUrls: ['./forfaits-cuba.component.css']
})
export class ForfaitsCubaComponent implements OnInit {

  forfaits: Forfait[] = [];


  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits()
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => this.forfaits = resultat);
  }

}
