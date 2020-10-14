import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weat-prediction',
  templateUrl: './weat-prediction.component.html',
  styleUrls: ['./weat-prediction.component.scss']
})
export class WeatPredictionComponent implements OnInit {

  ngOnInit(): void {
     
  }

  predictedY: number = 0;

  // xy_dataset format: array of [x, y] arrays
  xyDatasets = [
               [1994, 10749],  
               [1995, 13106],  
             [1996, 12114],  
         [1997, 12917], 
         [1998, 13738],
         [1999, 11150],
         [2000, 11631],
         [2001, 13259],
         [2002, 14354],
         [2003, 13874],
         [2004, 14691],
         [2005, 15567],
         [2006, 15204],
         [2007, 16711],
         [2008, 16245],
         [2009, 18269],
         [2010, 18385],
         [2011, 20288],
         [2012, 21102],
         [2013, 24446],
         [2014, 25433 ],

         ];
  newXval: number;

  linearRegression(newX) {
    if(newX != '') {
      document.querySelector('.add-table').removeAttribute('disabled');

      let aParameter = 0,
          bParameter = 0,
          xyMultiplication = [],
          xExponentiation = [],
          xyMultiplicationSum,
          xExponentiationSum,
          itemsLen = 0,
          xSum = 0,
          ySum = 0,
          xPowSum = 0;

      this.xyDatasets.map((xy) => {
        xyMultiplication.push(xy[0]*xy[1]);
        xExponentiation.push(Math.pow(xy[0], 2));
        xSum += xy[0];
        ySum += xy[1];
        xPowSum += Math.pow(xy[0], 2);
      });

      itemsLen = this.xyDatasets.length;
      xyMultiplicationSum = xyMultiplication.reduce((sum, x) => sum + x);
      xExponentiationSum = xExponentiation.reduce((sum, x) => sum + x);

      // y = a + b*x
      // n = dataSets length
      // b = n*sum(x*y) - sum(x)*sum(y) / n*sum(x*2) - (sum(x))*2
      let bNominator = (itemsLen*xyMultiplicationSum)-((xSum*ySum)),
          bDenominator = (itemsLen*xPowSum)-(Math.pow(xSum, 2));
          bParameter = bNominator/bDenominator;

      // a = mean(y) - b*x
      aParameter = (ySum/itemsLen)-(bParameter*(xSum/itemsLen));

      this.predictedY = Math.round(aParameter+(bParameter*newX));
      this.newXval = newX;
    } else {
      document.querySelector('.add-table').setAttribute('disabled', 'true');
    }
  }

  addToTable() {
    this.xyDatasets.push([Number(this.newXval), this.predictedY]);
  }

}

