import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import { PostsComponent } from './modules/posts/posts.component';
import { CreateComponent } from 'src/app/modules/create/create.component';
import { ListComponent } from 'src/app/modules/list/list.component';
import { EditComponent } from 'src/app/modules/edit/edit.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ProfileComponent } from './modules/profile/profile.component';
import {SubcreateComponent} from './modules/subscribers/subcreate/subcreate.component'
import { SublistComponent } from './modules/subscribers/sublist/sublist.component';
import { SubeditComponent } from './modules/subscribers/subedit/subedit.component';
import { FarmLocationCreateComponent } from './modules/farm_locations/farm-location-create/farm-location-create.component';
import { HarvestCreateComponent } from './modules/harvests/harvest-create/harvest-create.component';
import { HarvestEditComponent } from './modules/harvests/harvest-edit/harvest-edit.component';
import { HarvestListComponent } from './modules/harvests/harvest-list/harvest-list.component';
import { PlantCreateComponent } from './modules/plants/plant-create/plant-create.component';
import { PlantEditComponent } from './modules/plants/plant-edit/plant-edit.component';
import { PlantListComponent } from './modules/plants/plant-list/plant-list.component';
import { YeildPredictionComponent } from './ml/yeild-prediction/yeild-prediction.component';
import { CropRecommendationComponent } from './ml/crop-recommendation/crop-recommendation.component';
import { WeatherMapComponent } from './modules/weather/weather-map/weather-map.component';

//import {HttpClient} from '@angular/common/http'


const routes: Routes = [

  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'dashboard',
      component: DashboardComponent
    },
   
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'register',
      component: RegisterComponent
      ,
    },
    {
      path: 'profile',
      component: ProfileComponent
      ,
    },

    {
      path: 'create',
      component: CreateComponent,
    },
    {
      path: 'edit/:id',
      component: EditComponent,
    },

    {
      path: 'list',
      component: ListComponent,
    },

    {
      path: 'subcreate',
      component: SubcreateComponent,
    },

    {
      path: 'sublist',
      component: SublistComponent,
    },

    {
      path: 'subedit/:id',
      component: SubeditComponent,
    },
    
    {
      path: 'farmlocationcreate/:id',
      component: FarmLocationCreateComponent,
    },

    {
      path: 'harvestcreate',
      component: HarvestCreateComponent,
    },

    {
      path: 'harvestedit/:id',
      component: HarvestEditComponent,
    },

    {
      path: 'harvestlist',
      component: HarvestListComponent,
    },
    
    {
      path: 'plantcreate',
      component: PlantCreateComponent,
    },
    {
      path: 'plantedit/:id',
      component: PlantEditComponent,
    },

    {
      path: 'plantlist',
      component: PlantListComponent,
    },
         
    {
      path: 'prediction',
      component:YeildPredictionComponent,
    //CropRecommendationComponent,
    },

    {
      path: 'recommendation',
      component:CropRecommendationComponent,
    },

    
    {
      path: 'weather',
      component:WeatherMapComponent,
    },
         
         

      //{path: '', redirectTo: '/home', pathMatch: 'full'}

    ]
  },


  // otherwise redirect to home
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
],


  exports: [RouterModule]
})
export class AppRoutingModule { }
