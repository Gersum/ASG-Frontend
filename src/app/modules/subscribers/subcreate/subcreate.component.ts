import { Component, OnInit } from '@angular/core';
import { SubscriberService } from 'src/app/_services/subscriber.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { SubscriberService } from 'src/app/_services/Subscriber.service';

@Component({
  selector: 'app-subcreate',
  templateUrl: './subcreate.component.html',
  styleUrls: ['./subcreate.component.scss']
})
export class SubcreateComponent implements OnInit {

  hide=true;
  
  createForm : FormGroup; subscriber = {
    name: '',
    city: '',
    phone:+251,
    owner:''
  };
  submitted = false;

  constructor(private subscriberService: SubscriberService) { }

  ngOnInit() {
  }

  saveSubscriber() {
    const data = {
      name: this.subscriber.name,
      city: this.subscriber.city,
      owner:this.subscriber.owner,
      phone:this.subscriber.phone

     
    };

    this.subscriberService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newSubscriber() {
    this.submitted = false;
    this.subscriber = {
      name: '',
      city: '',
      owner:'',
      phone:+251,

      
    };
  }

}
