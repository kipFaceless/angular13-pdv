
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'; // To toggle sidenav
//import { AuthenticationService } from './../../services/authentication.service';
import { MatMenuTrigger } from '@angular/material/menu';
//import { ProfileComponent } from './..//profile/profile.component';
//import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  trigger :any

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav; // For sidenav hide
 // user$ = this.authService.currentUser$


  constructor(private observer: BreakpointObserver, private cdr : ChangeDetectorRef,
     //public authService : AuthenticationService,
      //public dialog: MatDialog
      ) { }

      ngAfterViewInit() {
        this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
            this.cdr.detectChanges();
          }else{
            this.sidenav.mode = 'side';
            this.sidenav.open();
            this.cdr.detectChanges();
          }
        }

        );
      }

  ngOnInit(): void {
  }





  logout(){
    //this.authService.logout()
  }

  openProfile(){
  //  this.dialog.open(ProfileComponent);
  }

}
