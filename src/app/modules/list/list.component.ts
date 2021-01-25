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
   userCount: number;
   userRoleCount: number;
   userAdminRoleCount: number;
   userUserRoleCount: number;
   userExtentionRoleCount: number;
   userSeederRoleCount: number;
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
     this.loadUserCount();
     this.loadAdminRoleCount();
     this.loadExtentionRoleCount();
     this.loadSeederRoleCount();
     this.loadUserRoleCount();
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
    if (confirm("Are you sure you want to delete?"))
    this.issueService.deleteIssue(id).subscribe(()=>{
        this.fetchIssues();
    })
  }

  loadUserCount(){
    this.issueService.getUserCount().subscribe((users)=>{
      this.userCount = users[0].count;
    });
  }

  loadAdminRoleCount(){
    this.issueService.getUserRoleCount().subscribe((users)=>{
      this.userAdminRoleCount = users[1].count; // 1 ---> admin
    //  console.log("roles count:"+data[0].count)
    });
  }

  loadUserRoleCount(){
    this.issueService.getUserRoleCount().subscribe((users)=>{
      this.userUserRoleCount = users[3].count; // 3 ---> user
    //  console.log("roles count:"+data[2].count)
    });
  }

  loadExtentionRoleCount(){
    this.issueService.getUserRoleCount().subscribe((users)=>{
      this.userExtentionRoleCount =users[2].count; // 2 ---> Extention
    //  console.log("roles count:"+data[1].count)
    });
  }

  loadSeederRoleCount(){
    this.issueService.getUserRoleCount().subscribe((data)=>{
      this.userSeederRoleCount = data[0].count; // 0 ----> Seed expert
    // console.log("roles count:"+data[3].count)
    });
  }


}
