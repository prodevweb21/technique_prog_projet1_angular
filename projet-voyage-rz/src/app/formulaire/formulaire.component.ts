import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  @Input() forfait: Forfait = {id:'', destination:'', ville_de_depart:'', hotel: { nom_hotel:'', coordonnees:'', nombre_etoiles:0, nombre_chambres:0, caracteristiques:['']}, date_de_depart:'', date_de_retour:'', prix:0, rabais:0, vedette:true}


  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    
  }

  onSave(forfaitForm: NgForm) {
    if (forfaitForm.valid) {
      if (this.forfait.id != null && this.forfait.id != '') {
        // Si on a un id, on doit modifier le produit
        this.forfaitService.editForfait(this.forfait).subscribe(_ => { /* todo : mettre à jour le tableau */ });

      } else { 
        // Sinon, on doit ajouter le produit
        this.forfaitService.addForfait(this.forfait).subscribe(_ => { /* todo : mettre à jour le tableau */});
      }
      }
      
}



}
  



  

