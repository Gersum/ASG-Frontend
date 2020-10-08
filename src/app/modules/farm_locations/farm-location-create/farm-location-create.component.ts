import { Component, OnInit } from '@angular/core';
import { SubscriberService } from 'src/app/_services/subscriber.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-farm-location-create',
  templateUrl: './farm-location-create.component.html',
  styleUrls: ['./farm-location-create.component.scss']
})
export class FarmLocationCreateComponent implements OnInit {
  [x: string]: any;
  hide = true;
  id : String ;
  user:any={}
  updateForm:FormGroup;
  
  
  createForm : FormGroup; subscriber = {
    latitude: 0,
    longitude: 0,
  };
  submitted = false;
constructor(private subscribersService : SubscriberService, public fb : FormBuilder,private router:Router,private snackbar:MatSnackBar,private route:ActivatedRoute) { 

}


ngOnInit(): void {
 this.route.params.subscribe(params=>{
   this.id=params.id;
   this.subscribersService.get(this.id).subscribe(res=>{
     this.user=res;
   });
 });
}

saveSubLoc() {
  const data = {
    latitude: this.subscriber.latitude,
    longitude: this.subscriber.longitude
   
  };

  this.subscribersService.createFarmlocation(this.id,this.longitude,this.latitude)
  .subscribe(
    response => {
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });

// createSubLoc(longitude,latitude){
//  this.subscribersService.createFarmlocation(this.id,longitude,latitude).subscribe(()=>{
//   this.snackbar.open('User created successfully','OK',{
//     duration:3000
//   });
//  });
}
  
 
newSubscriber() {
  this.submitted = false;
  this.subscriber = {
    longitude: 0,
    latitude: 0
  
  };
}

}
