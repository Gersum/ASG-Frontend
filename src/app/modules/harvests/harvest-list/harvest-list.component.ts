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
  
  harvests: Harvest[];
  displayedColumns=['farmer','crop','operation','quantity','quality','actions'];

 constructor(private harvestService :HarvestService, private router:Router) { }

  
    ngOnInit(): void {
      this.harvestService.getAll().subscribe((harvests)=>{
       console.log(harvests); 
      })
     
       this.fetchHarvests();
  
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
  
  
  }
  