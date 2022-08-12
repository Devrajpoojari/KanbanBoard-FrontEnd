import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  usernamePattern='^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
  passwordPattern='^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}$'
  user: User=new User();
  
  constructor(private userService :UserService) { }

  message:string;
  ngOnInit(): void {
  }
  public registerNow()
  {
    this.message="registration is successfull";
   let resp= this.userService.doRegister(this.user);
   resp.subscribe((data)=>{
    console.log(data);
Swal.fire(
  "Your account created successfully",
  "",
  "success"
   )

   });
  }

}
