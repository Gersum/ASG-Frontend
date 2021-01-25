import { Component, OnInit } from '@angular/core';

import { SubscriberService } from 'src/app/_services/subscriber.service';
import { Router } from '@angular/router';
import { Subscriber } from 'src/app/model/subscriber.model';

@Component({
  selector: 'app-sublist',
  templateUrl: './sublist.component.html',
  styleUrls: ['./sublist.component.scss']
})
export class SublistComponent implements OnInit {

   subscribers: Subscriber[];
   displayedColumns=['name','city','phone','actions'];

  constructor(private subscriberService :SubscriberService, private router:Router) { }

  ngOnInit(): void {
    this.subscriberService.getAll().subscribe((subscribers)=>{
     console.log(subscribers); 
    })
   
     this.fetchSubscribers();

  }

  fetchSubscribers(){
    this.subscriberService
        .getAll()
        .subscribe((data:Subscriber[])=>{
          this.subscribers = data;
          console.log("Data requested");
          console.log(this.subscribers);
        });    
  }

  editSubscriber(id){
    
      this.router.navigate([`/subedit/${id}`]);      
  }

  deleteSubscriber(id){
     if (confirm("Are you sure you want to delete?"))
    this.subscriberService.delete(id).subscribe(()=>{
        this.fetchSubscribers();
    })
  }

  addSubLoc(id){
    this.router.navigate([`/farmlocationcreate/${id}`]);      
  }


}
