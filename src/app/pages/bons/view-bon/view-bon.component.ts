import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { BonsService } from 'src/app/services/bons.service';
import Swal from 'sweetalert2';
import { BonsComponent } from '../bons.component';

@Component({
  selector: 'app-view-bon',
  templateUrl: './view-bon.component.html',
  styleUrls: ['./view-bon.component.scss']
})
export class ViewBonComponent implements OnInit {

  imageUrl : any
  constructor(public dialog_ref: MatDialogRef<ViewBonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {bon:any}) {
      this.imageUrl = 'https://lycsfid.onrender.com'+this.data.bon.image;
     }

  ngOnInit() {}

}
