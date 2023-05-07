import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   form = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:'',
    contact:''
  };

constructor(){}
  ngOnInit(): void {
   
    
  }
  
  onSubmit():void{
    console.log(this.form);
  }

  onReset(form: NgForm): void{
    form.reset();
  }
}
