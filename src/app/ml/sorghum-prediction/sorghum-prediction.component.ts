import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorghum-prediction',
  templateUrl: './sorghum-prediction.component.html',
  styleUrls: ['./sorghum-prediction.component.scss']
})
export class SorghumPredictionComponent implements OnInit {
  ngOnInit(): void {
     
  }

  predictedY: number = 0;

  // xy_dataset format: array of [x, y] arrays
  xyDatasets = [
         [1961, 7930],  
         [1962,  7926],  
         [1963, 7925],  
         [1964, 8021], 
         [1965, 8100],
         [1966, 8200],
         [1967, 8164],
         [1968, 6814],
         [1969, 8489],
         [1970, 8617],
         [1971, 8932],
         [1972, 10180],
         [1973, 9375],
         [1974, 9225],
         [1975, 8395],
         [1976, 11260],
         [1977, 10118],
         [1978, 9278],
         [1979, 14517],
         [1980, 16011],
         [1981, 14579 ],
         [1982, 14291],
         [1983, 14977 ],
         [1984, 13153],
         [1985, 6604 ],
         [1986, 11390],
         [1987, 14579 ],
         [1988, 11632],
         [1989, 13543 ],
         [1990, 13177],
         [1991, 13433 ],
         [1992, 12247],
         

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
