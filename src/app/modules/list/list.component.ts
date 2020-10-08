import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/modules/issues.service';
import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';
// import { Issue } from '../../model/issue.model';
import { User } from '../../model/user.model';
//import { User } from './../../model/user.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    
   users: User[];
   displayedColumns=['username','email','roles','actions'];

  constructor(private issueService :IssuesService, private router:Router) { }

  ngOnInit(): void {
    this.issueService.getIssues().subscribe((users)=>{
     console.log(users); 
    })
   
     this.fetchIssues();

  }

  fetchIssues(){
    this.issueService
        .getIssues()
        .subscribe((data:User[])=>{
          this.users = data;
          console.log("Data requested");
          console.log(this.users);
        });    
  }

  editIssue(id){
      this.router.navigate([`/edit/${id}`]);      
  }

  deleteIssue(id){
    this.issueService.deleteIssue(id).subscribe(()=>{
        this.fetchIssues();
    })
  }


}
