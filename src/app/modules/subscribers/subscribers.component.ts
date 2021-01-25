import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {  MatPaginator } from '@angular/material/paginator';
import {  MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { IssuesService } from 'src/app/modules/issues.service';
import { Router } from '@angular/router';
import { HarvestService } from 'src/app/_services/harvest.service';
import { faUserSecret,faUsers,faHatCowboy,faBook,faSeedling,faLeaf} from '@fortawesome/free-solid-svg-icons';
import { Subscriber } from 'src/app/model/subscriber.model';
// import { MatTableDataSource } from '@angular/material/table';
// import { Issue } from '../../model/issue.model';
import { User } from '../../model/user.model';
import { any } from '@tensorflow/tfjs';
//import { User } from './../../model/user.model';
import { Harvest } from 'src/app/model/harvest.model';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { SubscriberService } from 'src/app/_services/subscriber.service';
import { PlantService } from 'src/app/_services/plant.service';
import { Charts } from './../../model/data';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-Subscribers',
  templateUrl: './Subscribers.component.html',
  styleUrls: ['./Subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {

  faUserSecret=faUserSecret;
  faUsers=faUsers;
  faHatCowboy=faHatCowboy;
  faBook=faBook;
  faSeedling=faSeedling;
  faLeaf=faLeaf;

  bigChart = [];
  cards = [];
  pieChart = [];
 // dataSource = new MatTableDataSource (ELEMENT_DATA);
  
 private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showSeederBoard  = false;
  showUserBoard  = false;
  username: string;


  subscribers: Subscriber[];
  displayedColumnsSub=['name','city','phone','createdAt'];


  dataSource : any;
  dataSourceSub:any;
  userCount: number;
   userRoleCount: number;
   userAdminRoleCount: number;
   userUserRoleCount: number;
   userExtentionRoleCount: number;
   userSeederRoleCount: number;
   users: User[];
   farmers:any;
   ExtentionHarvestCount:any;
   ExtentionPlantationCount:any;

   harvestCount: any;
   harvestQuantityCount: any;
  harverstTotalQtySum:any;
  harvests: Harvest[];
  ExtentionHarvestCountEach:any;
  ExtentionPlantCountEach : any;
    
   displayedColumns=['username','email','roles','createdAt'];
   @ViewChild(MatPaginator, { static: true }) paginator2: MatPaginator ;
   @ViewChild(MatSort, {static: true}) sort2: MatSort;
  
  constructor(private dashboardService: DashboardService ,private issueService :IssuesService,private harvestService :HarvestService, private subService:SubscriberService,private plantService : PlantService , private router:Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

   // this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
    

     ////////////////////////////

    
      this.fetchSubscribers();

     this.isLoggedIn = !!this.tokenStorageService.getToken();

     if (this.isLoggedIn) {
       const user = this.tokenStorageService.getUser();
       this.roles = user.roles;
 
       this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
       this.showModeratorBoard = this.roles.includes('ROLE_EXTENSION');
       this.showSeederBoard = this.roles.includes('ROLE_SEEDER');
       this.showUserBoard = this.roles.includes('ROLE_USER');

       this.username = user.username;
     } 

   }


fetchSubscribers(){
  this.subService
      .getAll()
      .subscribe((data:Subscriber[])=>{
        
          this.subscribers = data;
          this.dataSourceSub = new MatTableDataSource (this.subscribers);
          this.dataSourceSub.paginator = this.paginator2;
          this.dataSourceSub.sort = this.sort2;
          console.log("Data requested Subscribers");
          console.log(this.subscribers);
      });    
}





}
