import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { ProspectusService } from 'src/app/services/prospectus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-prospect',
  templateUrl: './add-prospect.component.html',
  styleUrl: './add-prospect.component.scss'
})
export class AddProspectComponent {
  agesCibles : any [] = ['0-10 ans', '10-20 ans', '20-40 ans', '40-60 ans', '60plus'];
  prospectusForm:any;
  selectedImg: string | ArrayBuffer;
  constructor(
    private formBuilder:FormBuilder,
    private prospectService: ProspectusService,
    private _router:Router,
    private toastService: ToastrService
  ) { }

   ngOnInit() {
    this.prospectusForm = this.formBuilder.group({
      'nomArticle': ['', Validators.required],
      'image': [File, Validators.required],
      'ageCible': ['', Validators.required],
      'sexeCible': ['', Validators.required],
    });
  }

  addProspectus(){
     const formData = new FormData();
    formData.append('nomArticle', this.prospectusForm.get('nomArticle').value);
    formData.append('image', this.prospectusForm.get('image').value);
    formData.append('ageCible', this.prospectusForm.get('ageCible').value);
    formData.append('sexeCible', this.prospectusForm.get('sexeCible').value);
    this.prospectService.createProspectus(formData).pipe(first()).
    subscribe(
      {
        next: () => {
          window.location.reload();
          this.toastService.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>Prospectus Crée avec succès.', '', {
           disableTimeOut: false,
           closeButton: true,
           timeOut:5,
           enableHtml: true,
           toastClass: "alert alert-info alert-with-icon",
         });
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
      this.prospectusForm.get('image').setValue(image);
      console.log(image)
      const reader = new FileReader();
      reader.onload = e => this.selectedImg = reader.result;
      reader.readAsDataURL(image);
      console.log('files',this.prospectusForm.get('image'))
    }
}
