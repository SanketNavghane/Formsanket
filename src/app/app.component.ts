
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  Loginform!:FormGroup;

  constructor(private fb:FormBuilder){
      
  }

  ngOnInit(): void {
  this.Loginform = this.fb.group(
    {
      FirstName:[''],
      LastName:[''],
      MobileNumber:[''],
      Email:[''],
      Password:['']
  }
  )

  }

  signin(frm:any){
    
    console.log(frm.value);
    console.log(frm)

    
  }
}