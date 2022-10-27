import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private router: Router, private userService: UserService)
  {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formLogin.value);

    this.userService
    .login(this.formLogin.value)
    .then(response =>{console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(error => {
      console.log(error);
      this.errorLogin();
    });
  }

  errorLogin(){
    console.log("Error al logearse");
    var email = document.getElementById('email') as HTMLInputElement;
    var password = document.getElementById('password') as HTMLInputElement;
    var emailPalabra = document.getElementById('emailId') as HTMLInputElement;
    var passwordPalabra = document.getElementById('contraId') as HTMLInputElement;
    
    emailPalabra.className = 'font1 error';
    passwordPalabra.className = 'font1 error';

    email.value = '';
    password.value = '';
  }
  accesoRapido(user: any){
    var email = document.getElementById('email') as HTMLInputElement;
    var password = document.getElementById('password') as HTMLInputElement;

    email.value = 'julian@mail.com';
    password.value = '123456';
}

}
