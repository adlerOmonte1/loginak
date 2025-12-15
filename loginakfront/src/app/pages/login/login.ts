import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // varialbes que se guardara lo q el usuario escriba
  email: string = '';
  password : string = '';

  constructor(private router:Router){}

  onLogin(){
    console.log('Datos ingresados:', this.email, this.password);
    if(this.email && this.password){
      console.log('Listo para el backend')
    }else{
      alert('Complete todos los campos')
    }
  }


}
