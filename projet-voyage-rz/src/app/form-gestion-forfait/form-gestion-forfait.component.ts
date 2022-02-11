import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import {MatTable} from '@angular/material/table';  
import { NgForm } from '@angular/forms';  
import { MiniForfaitComponent } from '../mini-forfait/mini-forfait.component';
import { NullTemplateVisitor } from '@angular/compiler';
import { FormulaireComponent } from '../formulaire/formulaire.component';



@Component({
  selector: 'app-form-gestion-forfait',
  templateUrl: './form-gestion-forfait.component.html',
  styleUrls: ['./form-gestion-forfait.component.css']
})
export class FormGestionForfaitComponent implements OnInit {

  forfaits: Forfait[] = [];
  selectedForfait?: Forfait;

  columnsToDisplay = ['destination', 'ville_de_depart', 'nom_hotel', 'coordonnees', 'nombre_etoiles', 'nombre_chambres', 'caracteristiques', 'date_de_depart', 'date_de_retour', 'prix', 'rabais', 'vedette', 'actions'];

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
  

    onSelect(forfait?: Forfait) {
      if (!forfait) {
        this.selectedForfait = {id: '', destination: '', ville_de_depart: '', hotel:{nom_hotel: '', coordonnees: '', nombre_etoiles: 0, nombre_chambres: 0, caracteristiques: ['']}, date_de_depart: '', date_de_retour: '', prix: 0, rabais: 0, vedette: true,};
      } else { 
        this.selectedForfait = forfait;
      }
    }
    

    
    }
