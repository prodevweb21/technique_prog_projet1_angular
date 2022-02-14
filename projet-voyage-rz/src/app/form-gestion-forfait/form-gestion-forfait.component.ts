import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import {MatTable} from '@angular/material/table';  
import { NgForm } from '@angular/forms';  
import { MiniForfaitComponent } from '../mini-forfait/mini-forfait.component';
import { NullTemplateVisitor } from '@angular/compiler';




@Component({
  selector: 'app-form-gestion-forfait',
  templateUrl: './form-gestion-forfait.component.html',
  styleUrls: ['./form-gestion-forfait.component.css']
})
export class FormGestionForfaitComponent implements OnInit {

  columnsToDisplay = ['destination', 'ville_de_depart', 'nom_hotel', 'date_de_depart', 'date_de_retour', 'prix', 'actions'];

  
  forfaits: Forfait[] = [];
  selectedForfait: Forfait;
  




  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

    getForfaits() : void {
      this.forfaitService.getForfaits()
          .subscribe(resultat => this.forfaits = resultat);
    }

    onSelect(forfait: Forfait): void {
      this.selectedForfait = forfait; 
    }

    onEdit(forfaitFormEdition: NgForm): void {
      if (forfaitFormEdition.valid) {
        this.forfaitService.editForfait(this.selectedForfait)
            .subscribe(() => this.selectedForfait);
      }
     }
  

      
    onDelete(forfait: Forfait): void {
      this.forfaitService.deleteForfait(forfait.id)
        .subscribe(result => this.forfaits = this.forfaits.filter(p => p !== forfait));
    }
  
}
