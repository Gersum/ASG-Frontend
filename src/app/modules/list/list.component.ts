import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/modules/issues.service';
import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';
// import { Issue } from '../../model/issue.model';
import { User } from '../../model/user.model';
//import { User } from './../../model/user.model';
import {  MatPaginator } from '@angular/material/paginator';
import {  MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    
   users: User[];
   dataSource : any;
   
   displayedColumns=['username','email','roles','createdAt','actions'];
   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
   @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private issueService :IssuesService, private router:Router) { }

  ngOnInit(): void {
    this.issueService.getIssues().subscribe((users)=>{
     console.log(users); 
    })
   
     this.fetchIssues();

  }

  public fetchIssues(){
    this.issueService
        .getIssues()
        .subscribe((data:User[])=>{
          this.users = data;
         this.dataSource = new MatTableDataSource (this.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
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
