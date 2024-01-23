import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProspectComponent } from './add-prospect/add-prospect.component';
import { ProspectusService } from 'src/app/services/prospectus.service';
import { first } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { DeleteProspectComponent } from './delete-prospect/delete-prospect.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prospectus',
  templateUrl: './prospectus.component.html',
  styleUrls: ['./prospectus.component.scss']
})
export class ProspectusComponent implements OnInit {

  articles : any;
  imageUrl : any;

  constructor(private dialog:MatDialog, private prospectuService: ProspectusService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.getAllProspectus();
  }

  open(){
    this.dialog.open(AddProspectComponent);
  }
  getAllProspectus(){
    this.prospectuService.getAllProspectus().pipe(first()).subscribe(
      {
        next: response =>{
          this.articles = response.data;
          console.log('prospectus', this.articles)
          this.imageUrl = 'https://lycsfid.onrender.com/api/v1'+this.articles[3].image;
          console.log('imageUrl', this.imageUrl);
          return response;
        }
      }
    )
  }

  openDeleteDialog(prospectus:any){
   const dialogRef = this.dialog.open(DeleteProspectComponent, {
      data : {idProspectus : prospectus}
    });

    dialogRef.afterClosed().subscribe(result =>{
      if (result === 'confirm'){
        this.deleteProspectus(prospectus);

      }
    })
  }

  deleteProspectus(id:any){
    this.prospectuService.deleteProspectusById(id).pipe(first()).subscribe(
      {
        next: response =>{
          this.getAllProspectus();
          this.toastrService.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span>Prospectus Supprimé avec succès.', '', {
           disableTimeOut: true,
           closeButton: true,
           timeOut:6,
           enableHtml: true,
           toastClass: "alert alert-info alert-with-icon",
         });
        }
      }
    )
  }

  refresh(){
    window.location.reload();
  }
}
