import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NgForm } from '@angular/forms';

import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  

  // Tableau des ajouts des caractéristiques

  separatorKeysCodes: number[] = [ENTER, COMMA];
  caracteristiqueCtrl = new FormControl();
  filteredCaracteristiques: Observable<string[]>;
  Caracteristiques: string[] = ['Spa'];
  allCaracteristiques: string[] = ['Piscine', 'Théatre', 'Océan', 'Site historique', 'Golf', 'Salle de sport', 'Discothèque'];

  @ViewChild('caracteristiqueInput') caracteristiqueInput: ElementRef<HTMLInputElement>;

  // Données de l'API.
  @Input() forfait: Forfait = {id: '', destination: '', ville_de_depart: '', hotel:{nom_hotel: '', coordonnees: '', nombre_etoiles: 0, nombre_chambres: 0, caracteristiques:[]}, date_de_depart: '', date_de_retour: '', prix: 0, rabais: 0, vedette: true,};

  @Output() majTableau = new EventEmitter() ;


  constructor(private forfaitService: ForfaitService) {

    // Info tableau

    this.filteredCaracteristiques = this.caracteristiqueCtrl.valueChanges.pipe(
      startWith(null),
      map((caracteristique: string | null) => (caracteristique ? this._filter(caracteristique) : this.allCaracteristiques.slice())),
    );
   }

      ngOnInit(): void {}

      // Evenement du tableau des caractéristiques
      
      add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // ajout des caractéristiques
    if (value) {
      this.forfait.hotel.caracteristiques.push(value);


    }

    // Effacer la valeur d’entrée
    event.chipInput!.clear();

    this.caracteristiqueCtrl.setValue(null);
  }

  remove(caracteristique: string): void {
    const index = this.Caracteristiques.indexOf(caracteristique);

    if (index !== -1) {
      this.Caracteristiques.splice(index, 1,);
      }
      
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.Caracteristiques.push(event.option.viewValue);
    this.caracteristiqueInput.nativeElement.value = '';
    this.caracteristiqueCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCaracteristiques.filter(caracteristique => caracteristique.toLowerCase().includes(filterValue));
  }
 


    // Panneau de changement Edit/Add
      onSave(forfaitForm: NgForm) {
    if (forfaitForm.valid) {
      this.forfait.hotel.caracteristiques = this.Caracteristiques;
      
      if (this.forfait.id != null && this.forfait.id != '') {
        // Si on a un id, on doit modifier le produit
        this.forfaitService.editForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });


      } else { 
        // Sinon, on doit ajouter le produit
        this.forfaitService.addForfait(this.forfait).subscribe(_ => { this.majTableau.emit()  });
      }
      }
    }

      onCancel() { 
        this.majTableau.emit();
      }
      
}




  




