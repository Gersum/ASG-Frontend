import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/_services/plant.service';
import { Router } from '@angular/router';
import { Plant } from 'src/app/model/plant.model';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {

  plants: Plant[];
  displayedColumns=['farmer','crop','operation','quantity','quality','type','variety','rainfall','yearOfrelease','seedRate','createdAt','actions'];

 constructor(private plantService :PlantService, private router:Router) { }

  
    ngOnInit(): void {
      this.plantService.getAll().subscribe((plants)=>{
       console.log(plants); 
      })
     
       this.fetchPlants();
  
    }
  
    fetchPlants(){
      this.plantService
          .getAll()
          .subscribe((data:Plant[])=>{
            this.plants = data;
            console.log("Data requested");
            console.log(this.plants);
          });    
    }
  
    editPlant(id){
        this.router.navigate([`/plantedit/${id}`]);      
    }
  
    deletePlant(id){
      this.plantService.delete(id).subscribe(()=>{
          this.fetchPlants();
      })
    }
  
    addSubLoc(id){
      this.router.navigate([`/farmlocationcreate/${id}`]);      
    }
  
  
  }
  