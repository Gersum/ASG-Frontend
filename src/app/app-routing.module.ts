import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
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
import { WeatPredictionComponent } from './ml/weat-prediction/weat-prediction.component';
import { SorghumPredictionComponent } from './ml/sorghum-prediction/sorghum-prediction.component';
import { MaizePredictionComponent } from './ml/maize-prediction/maize-prediction.component';
import { SoybeanPredictionComponent } from './ml/soybean-prediction/soybean-prediction.component';
import { PeaPredictionComponent } from './ml/pea-prediction/pea-prediction.component';
import {RouteGuardGuard} from '../app/_helpers/route-guard.guard'
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
      component: DashboardComponent,canActivate:[RouteGuardGuard]
    },
   
    {
      path: 'home',
      component: HomeComponent, canActivate:[RouteGuardGuard]
    },
    {
      path: 'register',
      component: RegisterComponent , canActivate:[RouteGuardGuard]
      ,
    },
    {
      path: 'profile',
      component: ProfileComponent
      , canActivate:[RouteGuardGuard]
    },

    {
      path: 'create',
      component: CreateComponent, canActivate:[RouteGuardGuard]
    },
    {
      path: 'edit/:id',
      component: EditComponent,  canActivate:[RouteGuardGuard]
    },

    {
      path: 'list',
      component: ListComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'subcreate',
      component: SubcreateComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'sublist',
      component: SublistComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'subedit/:id',
      component: SubeditComponent, canActivate:[RouteGuardGuard]
    },
    
    {
      path: 'farmlocationcreate/:id',
      component: FarmLocationCreateComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'harvestcreate',
      component: HarvestCreateComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'harvestedit/:id',
      component: HarvestEditComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'harvestlist',
      component: HarvestListComponent, canActivate:[RouteGuardGuard]
    },
    
    {
      path: 'plantcreate',
      component: PlantCreateComponent, canActivate:[RouteGuardGuard]
    },
    {
      path: 'plantedit/:id',
      component: PlantEditComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'plantlist',
      component: PlantListComponent, canActivate:[RouteGuardGuard]
    },
         
    {
      path: 'prediction',
      component:YeildPredictionComponent, canActivate:[RouteGuardGuard]
    //CropRecommendationComponent,
    },

    {
      path: 'recommendation',
      component:CropRecommendationComponent, canActivate:[RouteGuardGuard]
    },

    
    {
      path: 'weather',
      component:WeatherMapComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'wheat',
      component:WeatPredictionComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'sorghum',
      component:SorghumPredictionComponent, canActivate:[RouteGuardGuard]
    },
        
    {
      path: 'maize',
      component:MaizePredictionComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'soybean',
      component:SoybeanPredictionComponent, canActivate:[RouteGuardGuard]
    },

    {
      path: 'pea',
      component:PeaPredictionComponent, canActivate:[RouteGuardGuard]
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
