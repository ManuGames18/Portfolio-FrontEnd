import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/serivices/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private formBuilder:FormBuilder, private authenticationService:AuthenticationService, private route:Router) {
    this.form=this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],

      password:['', [Validators.required,Validators.minLength(8)]],

      deviceInfo:this.formBuilder.group({
        deviceId:["17867868768"],
        deviceType:["DEVICE_TYPE_ANDROID"],
        notificationToken:["67657575eececc34"]
      })
    })
   }

   get Email(){
    return this.form.get('email');
   }

   get Password(){
    return this.form.get('password');
   }

   onSend(event:Event){
    event.preventDefault;
    this.authenticationService.LogIn(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.route.navigate(['/home'])
    })
   }
}
