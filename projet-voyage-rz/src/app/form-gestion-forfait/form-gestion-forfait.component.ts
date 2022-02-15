import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormulaireForfaitsComponent } from '../dialog-formulaire-forfaits/dialog-formulaire-forfaits.component';



@Component({
  selector: 'app-form-gestion-forfait',
  templateUrl: './form-gestion-forfait.component.html',
  styleUrls: ['./form-gestion-forfait.component.css']
})
export class FormGestionForfaitComponent implements OnInit {

  forfaits: Forfait[] = [];
  selectedForfait?: Forfait;

  columnsToDisplay = ['destination', 'ville_de_depart', 'nom_hotel', 'coordonnees', 'nombre_etoiles', 'nombre_chambres', 'caracteristiques', 'date_de_depart', 'date_de_retour', 'prix', 'rabais', 'vedette', 'actions'];

  constructor(private forfaitService: ForfaitService, public dialog: MatDialog) { }

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
  
    
    //  Edite  avec le dialog
    onSelect(forfait: Forfait) {
      this.selectedForfait = forfait;
      const dialogRef = this.dialog.open(DialogFormulaireForfaitsComponent, {
        width: '500px',
        data: this.selectedForfait,
      });
        
      dialogRef.afterClosed().subscribe(result => {
        this.selectedForfait = result;
      });
     
  }
    
    
    }
