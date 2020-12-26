import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {  MatPaginator } from '@angular/material/paginator';
import {  MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { IssuesService } from 'src/app/modules/issues.service';
import { Router } from '@angular/router';
import { HarvestService } from 'src/app/_services/harvest.service';

// import { MatTableDataSource } from '@angular/material/table';
// import { Issue } from '../../model/issue.model';
import { User } from '../../model/user.model';
import { any } from '@tensorflow/tfjs';
//import { User } from './../../model/user.model';
import { Harvest } from 'src/app/model/harvest.model';
import { TokenStorageService } from 'src/app/_services/token-storage.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
 // dataSource = new MatTableDataSource (ELEMENT_DATA);
  
 private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showSeederBoard  = false;
  username: string;
 
 
 dataSource : any;
  userCount: number;
   userRoleCount: number;
   userAdminRoleCount: number;
   userUserRoleCount: number;
   userExtentionRoleCount: number;
   userSeederRoleCount: number;
   users: User[];


   harvestCount: any;
   harvestQuantityCount: any;
  harverstTotalQtySum:any;
  harvests: Harvest[];
    
   displayedColumns=['username','email','roles','createdAt'];
   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator ;
   @ViewChild(MatSort, {static: true}) sort: MatSort;
  

  constructor(private dashboardService: DashboardService ,private issueService :IssuesService,private harvestService :HarvestService, private router:Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

   // this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
     this.fetchIssues();
     this.loadUserCount();
     this.loadAdminRoleCount();
     this.loadExtentionRoleCount();
     this.loadSeederRoleCount();
     this.loadUserRoleCount();


     ////////////////////////////

     
     this.loadHarvestCount();
    // this.loadQuantityCount();
     this.loadTotalFarmerQuantity();



     this.isLoggedIn = !!this.tokenStorageService.getToken();

     if (this.isLoggedIn) {
       const user = this.tokenStorageService.getUser();
       this.roles = user.roles;
 
       this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
       this.showModeratorBoard = this.roles.includes('ROLE_EXTENSION');
       this.showSeederBoard = this.roles.includes('ROLE_SEEDER');
 
       this.username = user.username;
     }
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

 ///////////////////////////////////////////////////

 
 loadHarvestCount(){
  this.harvestService.getHarvestCount().subscribe((harvests)=>{
    this.harvestCount = harvests[0].count;
  });
}

loadQuantityCount(){
  this.harvestService.getHarvestTotalQuantity().subscribe((harvests)=>{
    for(let i = 0 ; i <=2 ; i++){
    this.harvestQuantityCount = harvests[i];}
   // this.harvestQuantityCount = harvests[0]._id.crop;
   // this.harvestQuantityCount = harvests[0]._id.total;
  });
}

loadTotalFarmerQuantity(){
  this.harvestService.getHarvestTotal().subscribe((harvests)=>{
    this.harverstTotalQtySum = harvests[0].total;
  });
}


}