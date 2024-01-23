import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-prospect',
  templateUrl: './delete-prospect.component.html',
  styleUrl: './delete-prospect.component.scss'
})
export class DeleteProspectComponent {

  constructor(private dialogRef: MatDialogRef<DeleteProspectComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any){

  }

  confirmDelete(){
    this.dialogRef.close('confirm');
  }

}
