import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import {CustomerService} from '../customer.service';
import { UserInfoDTO } from '../UserInfoDTO';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {

      customer=new UserInfoDTO(null,null,null,null);

  public constructor(private customerService:CustomerService){}

  ngOnInit() {
  }
     statusOfName:boolean=true;
     statusOfEmail:boolean=false;
     statusOfContactNumber:boolean=false;
     statusOfCity:boolean=false;

    @Output() 
    valueChange = new EventEmitter();
    
     showQuestions:boolean=false;

  toggledisplay(val1:string){
    console.log("In toggledisplay "+val1);
    if(val1=='showEmail')
      this.statusOfEmail=true;
    else if(val1=='showContactNumber')
      this.statusOfContactNumber=true;
    else if(val1=='showCity')
      this.statusOfCity=true;
  }

  askQuestions(){
    console.log("askQuestions");
    this.valueChange.emit(this.showQuestions);
  }

  	public saveCustomer():void{
      console.log(this.customer.userName);
    this.customerService.saveCustomer(this.customer).subscribe(response => 
      {
        // console.log("You entered details. This is your status code: "+response.status);
        this.showQuestions=true;
        console.log(this.showQuestions);
        this.askQuestions()});	
	}
}
