import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDTO } from 'src/app/Interface/Login';
import { UserService } from 'src/app/Service/User/user.service';
import alertify from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatFormFieldModule]

})
export class LoginComponent {
  constructor(private userService: UserService
    , private formBuilder: FormBuilder
    , private activatedRoute: ActivatedRoute
    , private router: Router) { }

  private loginDTO!: LoginDTO;

  public UserForm: FormGroup = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  public onSubmit() {
    if (this.UserForm.valid) {
      this.userService.login(this.UserForm.value).subscribe(data => {
        localStorage.setItem("token", data.token);
        this.router.navigate(['employee-list']);
      })
    }
    else alertify.error("Please provide needed informations.");


  }
}
