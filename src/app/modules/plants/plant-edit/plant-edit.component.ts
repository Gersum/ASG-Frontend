import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/_services/plant.service';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { Router,ActivatedRoute } from '@angular/router';
  import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-plant-edit',
  templateUrl: './plant-edit.component.html',
  styleUrls: ['./plant-edit.component.scss']
})
export class PlantEditComponent implements OnInit {
    hide = true;
    id : String ;
    user:any={}
    updateForm:FormGroup;
    
  constructor(private plantsService : PlantService, public fb : FormBuilder,private router:Router,private snackbar:MatSnackBar,private route:ActivatedRoute) { 
  this.createForm();
  }
  
  createForm(){
  this.updateForm = this.fb.group({
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
  });
  }
  
  ngOnInit(): void {
   this.route.params.subscribe(params=>{
     this.id=params.id;
     this.plantsService.get(this.id).subscribe(res=>{
       this.user=res;
       this.updateForm.get('farmer').setValue( this.user.farmer);
       this.updateForm.get('crop').setValue( this.user.crop);
       this.updateForm.get('operation').setValue( this.user.operation);
       this.updateForm.get('quantity').setValue( this.user.quantity);
       this.updateForm.get('quality').setValue( this.user.quality);
       this.updateForm.get('type').setValue( this.user.type);
       this.updateForm.get('variety').setValue( this.user.variety);
       this.updateForm.get('rainfall').setValue( this.user.rainfall);
       this.updateForm.get('yearOfrelease').setValue( this.user.yearOfrelease);
       this.updateForm.get('seedRate').setValue( this.user.seedRate);
       this.updateForm.get('additionalInfo').setValue( this.user.additionalInfo);
       
      
     });
   });
  }
  
  
  updatePlant( farmer,crop,operation,quantity,quality,type,variety,rainfall, yearOfrelease, seedRate,additionalInfo){
   this.plantsService.update(this.id,farmer,crop,operation,quantity,quality,type,variety,rainfall, yearOfrelease, seedRate,additionalInfo).subscribe(()=>{
    this.snackbar.open('User updated successfully','OK',{
      duration:3000
    });
   });
  }
  
  }