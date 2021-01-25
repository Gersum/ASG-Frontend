import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import {MatSortModule}  from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateComponent } from 'src/app/modules/create/create.component';
import { ListComponent } from 'src/app/modules/list/list.component';
import { EditComponent } from 'src/app/modules/edit/edit.component';
import { IssuesService } from 'src/app/modules/issues.service';
import {HttpClientModule} from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RegisterComponent } from 'src/app/modules/register/register.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { authInterceptorProviders } from '../../_helpers/auth.interceptor';
import { SubscribersComponent } from 'src/app/modules/subscribers/subscribers.component';
import { SubcreateComponent } from 'src/app/modules/subscribers/subcreate/subcreate.component';
import { SublistComponent } from 'src/app/modules/subscribers/sublist/sublist.component';
import { SubeditComponent } from 'src/app/modules/subscribers/subedit/subedit.component';
import { CroplistComponent } from 'src/app/modules/crops/croplist/croplist.component';
import { CropeditComponent } from 'src/app/modules/crops/cropedit/cropedit.component';
import { CropcreateComponent } from 'src/app/modules/crops/cropcreate/cropcreate.component';
import { FertCreateComponent } from 'src/app/modules/fertilizers/fert-create/fert-create.component';
import { FertEditComponent } from 'src/app/modules/fertilizers/fert-edit/fert-edit.component';
import { FertListComponent } from 'src/app/modules/fertilizers/fert-list/fert-list.component';
import { LogListComponent } from 'src/app/modules/logs/log-list/log-list.component';
import { LogEditComponent } from 'src/app/modules/logs/log-edit/log-edit.component';
import { LogCreateComponent } from 'src/app/modules/logs/log-create/log-create.component';
import { FarmLocationCreateComponent } from 'src/app/modules/farm_locations/farm-location-create/farm-location-create.component';
import { FarmLocationEditComponent } from 'src/app/modules/farm_locations/farm-location-edit/farm-location-edit.component';
import { FarmLocationListComponent } from 'src/app/modules/farm_locations/farm-location-list/farm-location-list.component';
import { HarvestCreateComponent } from 'src/app/modules/harvests/harvest-create/harvest-create.component';
import { HarvestListComponent } from 'src/app/modules/harvests/harvest-list/harvest-list.component';
import { PlantCreateComponent } from 'src/app/modules/plants/plant-create/plant-create.component';
import { HarvestEditComponent } from 'src/app/modules/harvests/harvest-edit/harvest-edit.component';
import { PlantEditComponent } from 'src/app/modules/plants/plant-edit/plant-edit.component';
import { PlantListComponent } from 'src/app/modules/plants/plant-list/plant-list.component';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { YeildPredictionComponent } from 'src/app/ml/yeild-prediction/yeild-prediction.component';
import { CropRecommendationComponent } from 'src/app/ml/crop-recommendation/crop-recommendation.component';
import { WeatherMapComponent } from 'src/app/modules/weather/weather-map/weather-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


import { SorghumPredictionComponent } from 'src/app/ml/sorghum-prediction/sorghum-prediction.component';
import { WeatPredictionComponent } from 'src/app/ml/weat-prediction/weat-prediction.component';
import { CropMenuComponent } from 'src/app/ml/crop-menu/crop-menu.component';
import { MaizePredictionComponent } from 'src/app/ml/maize-prediction/maize-prediction.component';
import { PeaPredictionComponent } from 'src/app/ml/pea-prediction/pea-prediction.component';
import { SoybeanPredictionComponent } from 'src/app/ml/soybean-prediction/soybean-prediction.component';
import { ChartsModule } from 'ng2-charts';
import { NguCarouselModule } from '@ngu/carousel';
//import { MatCarouselModule } from '@ngmodule/material-carousel';
import { Subscriber } from './../../model/subscriber.model';


@NgModule({
  declarations: [  
   DefaultComponent,
   DashboardComponent,
   PostsComponent,
   CreateComponent,
   ListComponent,
   EditComponent,
   HomeComponent,
   LoginComponent,
   RegisterComponent,
   ProfileComponent,

    
    SubcreateComponent,
    SubeditComponent,
    SublistComponent,
  

    CroplistComponent,
    CropeditComponent,
    CropcreateComponent,

    FertCreateComponent,
    FertEditComponent,
    FertListComponent,

    LogListComponent,
    LogEditComponent,
    LogCreateComponent,

    FarmLocationCreateComponent,
    FarmLocationListComponent,
    FarmLocationEditComponent,

    HarvestEditComponent,
    HarvestCreateComponent,
    HarvestListComponent,

    PlantListComponent,
    PlantCreateComponent,
    PlantEditComponent,


    YeildPredictionComponent,
    CropRecommendationComponent,
    WeatherMapComponent,
    SorghumPredictionComponent,
    WeatPredictionComponent,
    CropMenuComponent,
    MaizePredictionComponent,
    PeaPredictionComponent,
    SoybeanPredictionComponent,
    SubscribersComponent
     ],
  imports: [
 

    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule, 
    HttpClientModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatIconModule ,
    MatSnackBarModule,
    FontAwesomeModule,
    RouterModule,
    MatProgressBarModule,
    LeafletModule,
    ChartsModule,
    NguCarouselModule 
    
    
    
   
    
  ],

  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
  ],

   providers: [
     DashboardService,
     IssuesService,
     UserService,
     AuthService,
     TokenStorageService,
     authInterceptorProviders
   ],
})
export class DefaultModule { }

 
