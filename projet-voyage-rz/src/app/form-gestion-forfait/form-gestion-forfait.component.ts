import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import {MatTable} from '@angular/material/table';  
import { NgForm } from '@angular/forms';  
import { MiniForfaitComponent } from '../mini-forfait/mini-forfait.component';




@Component({
  selector: 'app-form-gestion-forfait',
  templateUrl: './form-gestion-forfait.component.html',
  styleUrls: ['./form-gestion-forfait.component.css']
})
export class FormGestionForfaitComponent implements OnInit {

  columnsToDisplay = ['destination', 'ville_de_depart', 'nom_hotel', 'date_de_depart', 'date_de_retour', 'prix'];

  
  forfaits: Forfait[] = [];
  




  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

    getForfaits() : void {
      this.forfaitService.getForfaits()
          .subscribe(resultat => this.forfaits = resultat);
    }

   
    onDelete(forfait: Forfait): void {
      this.forfaitService.deleteForfait(forfait.id)
        .subscribe(result => this.forfaits = this.forfaits.filter(p => p !== forfait));
    }
  
}
