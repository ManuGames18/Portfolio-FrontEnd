import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUniversalAccess, faUserCheck, faUserSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faUniversalAccess = faUniversalAccess;
  faUserBtn = faUserCheck;
  user: boolean = false;

  constructor(private route:Router){ }

  home(){
    this.route.navigate(["/home"])
  }

  about(){
    this.route.navigate(["/about"])
  }

  proyects(){

  }

  studies(){
    
  }

  login(){
    this.route.navigate(["/login"])
  }

  mouseEnter(){
    this.faUserBtn = faUserSlash;
  }

  mouseLeave(){
    this.faUserBtn = faUserCheck;
  }
}
