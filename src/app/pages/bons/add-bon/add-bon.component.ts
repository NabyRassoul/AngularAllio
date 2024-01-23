import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { BonsService } from 'src/app/services/bons.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bon',
  templateUrl: './add-bon.component.html',
  styleUrls: ['./add-bon.component.scss']
})
export class AddBonComponent implements OnInit {


  agesCibles : any [] = ['0-10 ans', '10-20 ans', '20-40 ans', '40-60 ans', '60plus ans'];
  bonForm : FormGroup;
  selectedImg : any;


  constructor(
    private formBuilder:FormBuilder,
    private bonService: BonsService,
  ) { }

  ngOnInit() {
    this.bonForm = this.formBuilder.group({
      'dateDebut': ['', Validators.required],
      'dateFin': ['', Validators.required],
      'typeDeReduction': ['', Validators.required],
      'codeDeReduction': ['', Validators.required],
      'montantDeReduction': ['', Validators.required],
      'quantityBon': ['', Validators.required],
      'ageCible': ['', Validators.required],
      'sexeCible': ['', Validators.required],
      'localisation': ['', Validators.required],
      'image': [File, Validators.required],
    });
  }

  addBon(){
    const formData = new FormData();
    formData.append('dateDebut', this.bonForm.get('dateDebut').value);
    formData.append('dateFin', this.bonForm.get('dateFin').value);
    formData.append('typeDeReduction', this.bonForm.get('typeDeReduction').value);
    formData.append('codeDeReduction', this.bonForm.get('codeDeReduction').value);
    formData.append('montantDeReduction', this.bonForm.get('montantDeReduction').value);
    formData.append('quantityBon', this.bonForm.get('quantityBon').value);
    formData.append('ageCible', this.bonForm.get('ageCible').value);
    formData.append('sexeCible', this.bonForm.get('sexeCible').value);
    formData.append('localisation', this.bonForm.get('localisation').value);
    formData.append('image', this.bonForm.get('image').value);
    console.log('Form Data', formData);
    this.bonService.createBon(formData).pipe(first()).
    subscribe(
      {
        next: (response:any) => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Bon crée avec succès',
              timer: 1000
            });
            window.location.reload();
            },
            error: (err) => {
              Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: err.message,
              timer: 5000
            });
              console.error(err);
            }
      }
    )
  }

    uploadImage(files: FileList) {
      const image = files[0];
      this.bonForm.get('image').setValue(image);
      console.log(image)
      const reader = new FileReader();
      reader.onload = e => this.selectedImg = reader.result;
      reader.readAsDataURL(image);
      console.log('files',this.bonForm.get('image'))
    }


}
