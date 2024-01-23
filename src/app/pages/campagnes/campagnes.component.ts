import { Component, OnInit } from '@angular/core';
import { ViewCampagnComponent } from './view-campagn/view-campagn.component';
import { first } from 'rxjs';
import { AddCampagnComponent } from './add-campagn/add-campagn.component';
import { MatDialog } from '@angular/material/dialog';
import { CampagnesService } from 'src/app/services/campagnes.service';

@Component({
  selector: 'app-campagnes',
  templateUrl: './campagnes.component.html',
  styleUrls: ['./campagnes.component.scss']
})
export class CampagnesComponent implements OnInit {

 campagnes:any;
  fetchedCampagn: any;

  constructor(private dialog : MatDialog, private campagnService: CampagnesService) { }

   ngOnInit() {
    this.getCampagnes();
  }

  open() {
    this.dialog.open(AddCampagnComponent);
  }


  getCampagnes(){
      this.campagnService.getAllCampagnes().pipe(first()).subscribe(
        {
          next: (response:any) =>{
            this.campagnes = response.data;
          },
          error : (error) =>{
            console.error(error)
          }
        }
      )
  }

  getCampagneById(id: any) {
    return this.campagnService.getCampagneById(id).pipe(first());
  }

  refresh(){
    window.location.reload();
  }

  openCampagne(id: any) {
    this.getCampagneById(id).subscribe((fetchedCampagn: any) => {
      this.dialog.open(ViewCampagnComponent, {
        data: {
          campagne: fetchedCampagn
        }
      });
    });
  }

}
