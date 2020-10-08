import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/_services/plant.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-plant-create',
  templateUrl: './plant-create.component.html',
  styleUrls: ['./plant-create.component.scss']
})
export class PlantCreateComponent implements OnInit {

      hide=true;
      
      createForm : FormGroup; plant = {
        farmer:'',
        crop: '',
        operation:'',
        quantity:1,
        quality:'',
        type:'',
        variety:'',
        rainfall:0,
        yearOfrelease:'',
        seedRate:0.0,
        additionalInfo:''
};

      submitted = false;
    
      constructor(private plantService: PlantService) { }
    
      ngOnInit() {
      }
    
      savePlant() {
        const data = {
          farmer: this.plant.farmer,
          crop: this.plant.crop,
          quantity:this.plant.quantity,
          quality:this.plant.quality,
          operation:this.plant.operation,
          type:this.plant.type,
          variety:this.plant.variety,
          rainfall:this.plant.rainfall,
          yearOfrelease:this.plant.yearOfrelease,
          seedRate:this.plant.seedRate,
          additionalInfo:this.plant.additionalInfo
         
        };
    
        this.plantService.create(data)
          .subscribe(
            response => {
              console.log(response);
              this.submitted = true;
            },
            error => {
              console.log(error);
            });
      }
    
      newPlant() {
        this.submitted = false;
        this.plant = {
          farmer:'',
          crop: '',
          operation:'',
          quantity:1,
          quality:'',
          type:'',
          variety:'',
          rainfall:0,
          yearOfrelease:'',
          seedRate:0.0,
          additionalInfo:''
        
        };
      }
    
    }
    
