import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-campagn',
  templateUrl: './view-campagn.component.html',
  styleUrl: './view-campagn.component.scss'
})
export class ViewCampagnComponent {
 imageUrl : any
  constructor(public dialog_ref: MatDialogRef<ViewCampagnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {campagne:any}) {
      this.imageUrl = 'https://lycsfid.onrender.com'+this.data.campagne.image;
     }

  ngOnInit() {}
}
