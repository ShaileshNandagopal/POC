import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public router:Router ,private dialog:MatDialog) { }

  ngOnInit() {
  }
nextPage(){
//let dialogRef = this.dialog.open(AdminLoginComponent);

  //this.router.navigate(['/admin-login']);
 
}
}
