import { Component, OnInit } from '@angular/core';
import { HarvestService } from 'src/app/_services/harvest.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-harvest-edit',
  templateUrl: './harvest-edit.component.html',
  styleUrls: ['./harvest-edit.component.scss']
})
export class HarvestEditComponent implements OnInit {
  hide = true;
  id : String ;
  user:any={}
  updateForm:FormGroup;
  
constructor(private harvestsService : HarvestService, public fb : FormBuilder,private router:Router,private snackbar:MatSnackBar,private route:ActivatedRoute) { 
this.createForm();
}

createForm(){
this.updateForm = this.fb.group({
      farmer:'',
      crop: '',
      operation:'',
      quantity:1,
      quality:'',
 
 
});
}

ngOnInit(): void {
 this.route.params.subscribe(params=>{
   this.id=params.id;
   this.harvestsService.get(this.id).subscribe(res=>{
     this.user=res;
     this.updateForm.get('farmer').setValue( this.user.farmer);
     this.updateForm.get('crop').setValue( this.user.crop);
    // this.updateForm.get('password').setValue( this.user.password);
     this.updateForm.get('operation').setValue( this.user.operation);
     this.updateForm.get('quantity').setValue( this.user.quantity);
     this.updateForm.get('quality').setValue( this.user.quality);
    
   });
 });
}


updateHarvest(farmer,crop,operation,quantity,quality){
 this.harvestsService.update(this.id,farmer,crop,operation,quantity,quality).subscribe(()=>{
  this.snackbar.open('User updated successfully','OK',{
    duration:3000
  });
 });
}

}
