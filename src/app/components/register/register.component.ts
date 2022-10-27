import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor(private userService: UserService, private router: Router) 
  {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      check_password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
  
    if (this.formReg.value.password == this.formReg.value.check_password) {
      console.log("Son iguales");
      this.registrarse();
      
    }else{
      console.log("No son iguales");
      this.errorRegistro();
    }
    
  }

  registrarse(){
    this.userService.register(this.formReg.value)
    .then(response=> {
      console.log(response);

      /* DESCOMENTAR DESPUES */
      /* this.router.navigate(['/register/complete']);*/
    })
    .catch(error => {
      console.log(error);
    this.errorRegistro();
    });
  }

  errorRegistro(){
    console.log("Error al registrarse");
    var email = document.getElementById('email') as HTMLInputElement;
    var password = document.getElementById('password') as HTMLInputElement;
    var check_password = document.getElementById('check_password') as HTMLInputElement;var emailPalabra = document.getElementById('emailId') as HTMLInputElement;
    var passwordPalabra = document.getElementById('contraId') as HTMLInputElement;
    var check_passwordPalabra = document.getElementById('check_contraId') as HTMLInputElement;

    
    emailPalabra.className = 'font1 error';
    passwordPalabra.className = 'font1 error';
    check_passwordPalabra.className = 'font1 error';
    
/*  email.className = '';
password.className = '';
check_password.className = ''; */

    email.value = '';
    password.value = '';
    check_password.value = '';
  }

}
