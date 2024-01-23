import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CampagnesService } from 'src/app/services/campagnes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-campagn',
  templateUrl: './add-campagn.component.html',
  styleUrl: './add-campagn.component.scss'
})
export class AddCampagnComponent implements OnInit {


  agesCibles : any [] = ['0-10 ans', '10-20 ans', '20-40 ans', '40-60 ans', '60plus'];
  campagnForm: FormGroup;
  selectedImg:any;

  constructor(private campagnService: CampagnesService,private formBuilder:FormBuilder,){}

  ngOnInit(){
     this.campagnForm = this.formBuilder.group({
      'nomCampagne': ['', Validators.required],
      'description': ['', ],
      'dateDebut': [''],
      'dateFin': [''],
      'ageCible': ['', Validators.required],
      'sexeCilbe': ['', Validators.required],
      'codePromo': ['', Validators.required],
      'localisation': ['', Validators.required],
      'image': [File, Validators.required],
    });
  }

  addCampagn(){
 const formData = new FormData();
    formData.append('nomCampagne', this.campagnForm.get('nomCampagne').value);
    formData.append('description', this.campagnForm.get('description').value);
    formData.append('dateDebut', this.campagnForm.get('dateDebut').value);
    formData.append('dateFin', this.campagnForm.get('dateFin').value);
    formData.append('ageCible', this.campagnForm.get('ageCible').value);
    formData.append('sexeCilbe', this.campagnForm.get('sexeCilbe').value);
    formData.append('codePromo', this.campagnForm.get('codePromo').value);
    formData.append('localisation', this.campagnForm.get('localisation').value);
    formData.append('image', this.campagnForm.get('image').value);
    console.log('Form Data', formData);
    this.campagnService.createCampagne(formData).pipe(first()).
    subscribe(
      {
        next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Campagne créee avec succès',
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
      this.campagnForm.get('image').setValue(image);
      console.log(image)
      const reader = new FileReader();
      reader.onload = e => this.selectedImg = reader.result;
      reader.readAsDataURL(image);
      console.log('files',this.campagnForm.get('image'))
    }

}
