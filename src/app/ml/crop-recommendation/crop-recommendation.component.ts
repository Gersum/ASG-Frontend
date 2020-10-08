import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crop-recommendation',
  templateUrl: './crop-recommendation.component.html',
  styleUrls: ['./crop-recommendation.component.scss']
})
export class CropRecommendationComponent implements OnInit {
  public tensors:tf.Tensor2D[]=[];
  public operation:string;
  public model:tf.Sequential;
  public learningRate:number=0.001;
  public modelCreated: boolean;
 public xs:Array<number[]>=[];
 public ys:Array<number[]>=[];
 public xsTest:Array<number[]>=[];
 public ysTest:Array<number[]>=[];

 public cropClasses=['wheat','maize','coffee'];
 currentEpoch: number=0;
 currentAccuracy: number=0;
 currentLoss: number=0;
 correctEval:number=0;
 wrongEval:number=0;
 example={altitude:23.3,temperature:56.3,rainfall:6.3,humidity:76};
 prediction: any;
 epochs:number=230;
 constructor(private httpClient:HttpClient){}
 ngOnInit() {
  
}


 onCreateModel() {
   this.model=tf.sequential();
   this.model.add(tf.layers.dense({
     units:10, inputShape:[4],activation:'sigmoid'
   }));
   this.model.add(tf.layers.dense({
     units:3,activation:'softmax'
   }));
   this.model.compile({
     optimizer:tf.train.adam(this.learningRate),
     loss:tf.losses.meanSquaredError,
     metrics:['accuracy']
   });
   this.modelCreated=true;
 }

 onLoadData() {
   this.httpClient.get("assets/ds-train-clean.csv",{responseType:'text'})
     .subscribe(data=>{
       let parsedData=this.parseData(data);
       this.xs=parsedData.xs;
       this.ys=parsedData.ys;
     },err=>{
       console.log(err);
     });
   this.httpClient.get("assets/ds-test-clean.csv",{responseType:'text'})
     .subscribe(data=>{
       let parsedData=this.parseData(data);
       this.xsTest=parsedData.xs;
       this.ysTest=parsedData.ys;
     },err=>{
       console.log(err);
     });
 }

 parseData(data){
   let inputs=[];
   let outputs=[];
   let lines=data.split(/\n/);
   for (let i = 0; i < lines.length; i++) {
     if(lines[i]!==''){
       let line=lines[i].split(",");
       inputs.push([
         parseFloat(line[0]),
         parseFloat(line[1]),
         parseFloat(line[2]),
         parseFloat(line[3])]);
       let output=[0,0,0];output[parseInt(line[4])]=1;
       outputs.push(output);
     }
   }
   return {xs:inputs,ys:outputs };
 }
 getCropClass(data){
   //let t=tf.tensor1d(data);
   let index=data.indexOf(1);
   return this.cropClasses[index];
 }

 onTrainModel() {
   const inputs:tf.Tensor2D=tf.tensor2d(this.xs);
   const targets:tf.Tensor2D=tf.tensor2d(this.ys);
   const inputsTest:tf.Tensor2D=tf.tensor2d(this.xsTest);
   const targetsTest:tf.Tensor2D=tf.tensor2d(this.ysTest);
     this.model.fit(inputs,targets,{
       epochs:this.epochs,
       validationData:[inputsTest,targetsTest],
       callbacks:{
         onEpochEnd:(epoch,logs)=>{
           this.currentEpoch=epoch;
           this.currentLoss=logs.loss;
           this.currentAccuracy=logs.acc;
         }
       }
     })

 }

 onSaveModel() {
   this.model.save('localstorage://cropModel')
     .then(result=>{
       alert('Success saving model!');
     },err=>{
       alert('Error saving Model!');
     })
 }

 onLoadModel() {
   tf.loadLayersModel('localstorage://cropModel')
     .then(m=>{
      // this.model.calculateLosses;
       this.model.compile({
         optimizer:tf.train.adam(this.learningRate),
         loss:tf.losses.meanSquaredError,
         metrics:['accuracy']
       });
       this.modelCreated=true;
       alert("Model loaded!");
     })
 }

 onEvalModel() {
   let inputsTest=tf.tensor2d(this.xsTest);
   let targetTest=tf.tensor2d(this.ysTest);
   let yTrue=targetTest.argMax(-1).dataSync();
   let predictions=this.model.predict(inputsTest);
   // @ts-ignore
   let yPredictions=predictions.argMax(-1).dataSync();
   this.correctEval=0;
   this.wrongEval=0;
   for (let i = 0; i < yPredictions.length; i++) {
     if(yTrue[i]==yPredictions[i]) ++this.correctEval
     else ++this.wrongEval;
   }

 }
//example={altitude:5.1,temperature:3.5,rainfall:1.4,humidity:0.2};
 onPredict(value: any) {
   let x1=parseFloat(value.altitude);
   let x2=parseFloat(value.temperature);
   let x3=parseFloat(value.rainfall);
   let x4=parseFloat(value.humidity);
   let input=tf.tensor2d([[x1,x2,x3,x4]]);
   const prediction=this.model.predict( input);
   // @ts-ignore
   let index=prediction.argMax(-1).dataSync()[0];
   this.prediction=this.cropClasses[index];
  
 }

}