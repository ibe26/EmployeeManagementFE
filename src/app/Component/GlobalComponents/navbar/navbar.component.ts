import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthGuardTokenService } from 'src/app/Service/AuthGuard/auth-guard-token.service';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone:true,
  imports:[MatButtonModule,CommonModule,RouterModule ]
})
export class NavbarComponent {
  constructor(private router:Router
              ,public guard:AuthGuardTokenService ){}

  public onLogOut(){
    localStorage.removeItem("token");
    alertify.success("Successfully logged out.")
    this.router.navigate(['/login']);
  }
}
