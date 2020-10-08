import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/modules/issues.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService, SignUpData } from '../../_services/auth.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
     hide = true;
     id : String ;
     user:any={}
     updateForm:FormGroup;
  constructor(private issuesService : IssuesService, public fb : FormBuilder,private router:Router,private snackbar:MatSnackBar,private route:ActivatedRoute) { 
this.createForm();
  }

  createForm(){
  this.updateForm = this.fb.group({
    username:['',Validators.required],
    email:'',
    password:'',
    roles:'',
    
  });
}
  
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.issuesService.getIssueById(this.id).subscribe(res=>{
        this.user=res;
        this.updateForm.get('username').setValue( this.user.username);
        this.updateForm.get('email').setValue( this.user.email);
       // this.updateForm.get('password').setValue( this.user.password);
        this.updateForm.get('roles').setValue( this.user.roles[0].name);
       
      });
    });
  }

  updateIssue(username,email,roles){
    this.issuesService.UpdateIssue(this.id,username,email,roles).subscribe(()=>{
     this.snackbar.open('User updated successfully','OK',{
       duration:3000
     });
    });
  }

}
