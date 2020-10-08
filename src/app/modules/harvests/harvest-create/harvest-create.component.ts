import { Component, OnInit } from '@angular/core';
import { HarvestService } from 'src/app/_services/harvest.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harvest-create',
  templateUrl: './harvest-create.component.html',
  styleUrls: ['./harvest-create.component.scss']
})
export class HarvestCreateComponent implements OnInit {

    hide=true;
    
    createForm : FormGroup; harvest = {
      farmer:'',
      crop: '',
      operation:'',
      quantity:1,
      quality:'',
     // additionalInfo:''
    };
    submitted = false;
  
    constructor(private harvestService: HarvestService) { }
  
    ngOnInit() {
    }
  
    saveHarvest() {
      const data = {
        farmer: this.harvest.farmer,
        crop: this.harvest.crop,
        quantity:this.harvest.quantity,
        quality:this.harvest.quality,
        operation:this.harvest.operation
       
      };
  
      this.harvestService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    }
  
    newHarvest() {
      this.submitted = false;
      this.harvest = {
        farmer:'',
        crop: '',
        operation:'',
        quantity:1,
        quality:'',
       // additionalInfo:''
      };
    }
  
  }
  