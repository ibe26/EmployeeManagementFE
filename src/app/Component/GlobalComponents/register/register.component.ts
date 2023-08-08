import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/User/user.service';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatFormFieldModule]

})
export class RegisterComponent {
  constructor(private userService: UserService
    , private formBuilder: FormBuilder
    , private activatedRoute: ActivatedRoute
    , private router: Router) { }

  public RegisterForm: FormGroup = this.formBuilder.group({
    login: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  public onSubmit() {
    if (this.RegisterForm.valid) {
      this.userService.register(this.RegisterForm.value).subscribe(data => {
        if (data.ok) {
          alertify.success("Successfully registered!");
          this.router.navigate(['/login']);
        }
      }
        , error => {
          if (error.status === 400) {
            alertify.error("User already exists!");
          }

        })
    }
    else alertify.error("Please provide needed informations.");


  }
}
