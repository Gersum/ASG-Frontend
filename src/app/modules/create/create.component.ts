import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/modules/issues.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    hide=true;
    createForm : FormGroup; 
  constructor(private issuesService : IssuesService, public fb : FormBuilder, private router:Router ) {
     
      this.createForm = this.fb.group({
      
      username:['',Validators.required],
      email:'',
      password:'',
     // roles:'',
        });

   }

   addIssue(username,email,password,roles){
        this.issuesService.addIssue(username,email,password,roles)
        .subscribe(()=>{
         
            this.router.navigate(['/list']);
        });
       
        
   }

  ngOnInit(): void {
  }

}
