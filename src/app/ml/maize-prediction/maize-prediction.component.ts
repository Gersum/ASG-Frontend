import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maize-prediction',
  templateUrl: './maize-prediction.component.html',
  styleUrls: ['./maize-prediction.component.scss']
})
export class MaizePredictionComponent implements OnInit {

  ngOnInit(): void {
     
  }

  predictedY: number = 0;

  // xy_dataset format: array of [x, y] arrays
  xyDatasets = [
    [1961, 9629],  
    [1962,  9610],  
    [1963, 9000],  
    [1964, 9850], 
    [1965, 10000],
    [1966, 10078],
    [1967, 10510],
    [1968, 10731],
    [1969, 10873],
    [1970, 11002],
    [1971, 10200],
    [1972, 10000],
    [1973, 11225],
    [1974, 18705],
    [1975, 14092],
    [1976, 10938],
    [1977, 15079],
    [1978, 17502],
    [1979, 12973],
    [1980, 18385],
    [1981, 19556 ],
    [1982, 18674],
    [1983, 11491 ],
    [1984, 13153],
    [1985, 16801 ],
    [1986, 17932],
    [1987, 16538 ],
    [1988, 16087],
    [1989, 15275 ],
    [1990, 17364],
    [1991, 11235 ],
    [1992, 13590],
    [1993, 17364],
    [1994, 11235 ],
    [1995, 13590],
    [1996, 17364],
    [1997, 11235 ],
    [1998, 13590],
    [1999, 17364],
    [2000, 11235 ],
    [2001, 13590],
    [2002, 16826],
    [2003, 17381],
    [2004, 16175],
    [2005, 17150],
    [2006, 16204],
    [2007, 17427],
    [2008, 18753],
    [2009, 15319],
    [2010, 16132],
    [2011, 20060],
    [2012, 26404],
    [2013, 19692],
    [2014, 21367],
    [2015, 21990],
    [2016, 25398],
    [2017, 29539],
    [2018, 30592],
    [2019, 32542],
    





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

