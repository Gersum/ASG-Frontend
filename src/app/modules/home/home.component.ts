import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterState } from '@angular/router';

import { MaizePredictionComponent } from 'src/app/ml/maize-prediction/maize-prediction.component';
import { PeaPredictionComponent } from 'src/app/ml/pea-prediction/pea-prediction.component';
import { WeatPredictionComponent } from 'src/app/ml/weat-prediction/weat-prediction.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  
})
export class HomeComponent {
  name = 'Droplist';
  currentRoute: string;
  routes = [
    {
      value: 'maize',
      display: 'Maize'
    },
    {
      value: 'pea',
      display: 'Pea'
    },
    {
      value: 'wheat',
      display: 'Wheat'
    }
  ]
  constructor(private route: ActivatedRoute, private router: Router) {
    
  }
  
  routeTo(e) {
    console.log('something change')
    this.router.navigate(['/' + e]);
  }

  onActivate(event) {
    if (event instanceof MaizePredictionComponent ) {
      this.currentRoute = 'maize';
    } else if (event instanceof PeaPredictionComponent ) {
      this.currentRoute = 'pea';
    } else if (event instanceof WeatPredictionComponent ) {
      this.currentRoute = 'wheat';
    }

  }

  ngOnInit() {
    this.currentRoute = 'maize';
  }
}
