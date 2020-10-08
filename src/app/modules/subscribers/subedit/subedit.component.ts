import { Component, OnInit } from '@angular/core';
import { SubscriberService } from 'src/app/_services/subscriber.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-subedit',
  templateUrl: './subedit.component.html',
  styleUrls: ['./subedit.component.scss']
})
export class SubeditComponent implements OnInit {
  hide = true;
  id : String ;
  user:any={}
  updateForm:FormGroup;
constructor(private subscribersService : SubscriberService, public fb : FormBuilder,private router:Router,private snackbar:MatSnackBar,private route:ActivatedRoute) { 
this.createForm();
}

createForm(){
this.updateForm = this.fb.group({
 name:['',Validators.required],
 city:'',
 phone:'',
 
 
});
}

ngOnInit(): void {
 this.route.params.subscribe(params=>{
   this.id=params.id;
   this.subscribersService.get(this.id).subscribe(res=>{
     this.user=res;
     this.updateForm.get('name').setValue( this.user.name);
     this.updateForm.get('city').setValue( this.user.city);
    // this.updateForm.get('password').setValue( this.user.password);
     this.updateForm.get('phone').setValue( this.user.phone);
    
   });
 });
}

updateSubscriber(name,city,phone){
 this.subscribersService.update(this.id,name,city,phone).subscribe(()=>{
  this.snackbar.open('User updated successfully','OK',{
    duration:3000
  });
 });
}

}
