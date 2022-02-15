import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-dialog-formulaire-forfaits',
  templateUrl: './dialog-formulaire-forfaits.component.html',
  styleUrls: ['./dialog-formulaire-forfaits.component.css']
})
export class DialogFormulaireForfaitsComponent {

  constructor(public dialogRef: MatDialogRef<DialogFormulaireForfaitsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Forfait){

     }
     fermerDialogue(): void {
      this.dialogRef.close();
    }
}
