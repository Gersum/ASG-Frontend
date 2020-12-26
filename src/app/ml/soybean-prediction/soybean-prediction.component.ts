import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soybean-prediction',
  templateUrl: './soybean-prediction.component.html',
  styleUrls: ['./soybean-prediction.component.scss']
})
export class SoybeanPredictionComponent implements OnInit {

  ngOnInit(): void {
     
  }

  predictedY: number = 0;

  // xy_dataset format: array of [x, y] arrays
  xyDatasets = [
    [1961, 14286],  
    [1962,  16216],  
    [1963, 17500],  
    [1964, 18605], 
    [1965, 17778],
    [1966, 20000],
    [1967, 20000],
    [1968, 20833],
    [1969, 20000],
    [1970, 23636],
    [1971, 24561],
    [1972, 26316],
    [1973, 25000],
    [1974, 25000],
    [1975, 25397],
    [1976, 25397],
    [1977, 26667],
    [1978, 37500],
    [1979, 44562],
    [1980, 28929],
    [1981, 31362 ],
    [1982, 46218],
    [1983, 23333 ],
    [1984, 33087],
    [1985, 23507 ],
    [1986, 47481],
    [1987, 40300 ],
    [1988, 59470],
    [1989, 31590 ],
    [1990, 29851],
    [1991, 30882 ],
    

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

