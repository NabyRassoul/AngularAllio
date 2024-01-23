import { Component, OnInit, inject } from '@angular/core';
import { ViewBonComponent } from './view-bon/view-bon.component';
import { MatDialog } from '@angular/material/dialog';
import { BonsService } from 'src/app/services/bons.service';
import { first } from 'rxjs';
import { AddBonComponent } from './add-bon/add-bon.component';

@Component({
  selector: 'app-bons',
  templateUrl: './bons.component.html',
  styleUrls: ['./bons.component.scss']
})
export class BonsComponent implements OnInit {

  bons:any;
  fetchedBon: any;

  constructor(private dialog : MatDialog, private bonService: BonsService) { }

   ngOnInit() {
    this.getBons();
  }

  open() {
    this.dialog.open(AddBonComponent);
  }


  getBons(){
      this.bonService.getAllBons().pipe(first()).subscribe(
        {
          next: (response:any) =>{
            this.bons = response.data;
          },
          error : (error) =>{
            console.error(error)
          }
        }
      )
  }

  getBonById(id: any) {
    return this.bonService.getBonById(id).pipe(first());
  }

  refresh(){
    window.location.reload();
  }

  openBon(id: any) {
    this.getBonById(id).subscribe((fetchedBon: any) => {
      this.dialog.open(ViewBonComponent, {
        data: {
          bon: fetchedBon
        }
      });
    });
  }

}
