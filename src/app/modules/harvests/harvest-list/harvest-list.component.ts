import { Component, OnInit } from '@angular/core';
import { HarvestService } from 'src/app/_services/harvest.service';
import { Router } from '@angular/router';
import { Harvest } from 'src/app/model/harvest.model';



@Component({
  selector: 'app-harvest-list',
  templateUrl: './harvest-list.component.html',
  styleUrls: ['./harvest-list.component.scss']
})
export class HarvestListComponent implements OnInit {
  harvestCount: any;
  farmer:any;
  crop:any;
  harvestQuantityCount: any;
  harverstTotalQtySum:any;
  harvests: Harvest[];
  displayedColumns=['farmer','crop','operation','quantity','quality','actions'];

 constructor(private harvestService :HarvestService, private router:Router) { }

  
    ngOnInit(): void {
      this.harvestService.getAll().subscribe((harvests)=>{
       console.log(harvests); 
      })
     
       this.fetchHarvests();
       this.loadHarvestCount();
       this.loadQuantityCount();
       this.loadTotalFarmerQuantity();
  
    }
  
    fetchHarvests(){
      this.harvestService
          .getAll()
          .subscribe((data:Harvest[])=>{
            this.harvests = data;
            console.log("Data requested");
            console.log(this.harvests);
          });    
    }
  
    editHarvest(id){
        this.router.navigate([`/harvestedit/${id}`]);      
    }
  
    deleteHarvest(id){
      this.harvestService.delete(id).subscribe(()=>{
          this.fetchHarvests();
      })
    }
  
    addSubLoc(id){
      this.router.navigate([`/farmlocationcreate/${id}`]);      
    }

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
  