import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WidgetComponent } from './widget/widget.component';
import { AreaComponent } from './widget/area/area.component';
import {HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widget/card/card.component';
import { PieComponent } from './widget/pie/pie.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';

 
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    WidgetComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    
  ],
  imports: [
  
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    ReactiveFormsModule,
    NgbModule,
    HighchartsChartModule,
    FontAwesomeModule,
    AppRoutingModule,
    ChartsModule,
   // MatCarouselModule.forRoot()
      
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
  ]
})
export class SharedModule {
 
 }
