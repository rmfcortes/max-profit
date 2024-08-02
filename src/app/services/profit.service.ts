import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { ProfitData } from '@models/ProfitData.model';

@Injectable({
  providedIn: 'root'
})
export class ProfitService {

  private _maxProfit$ = new BehaviorSubject<number>(0);
  private _sellIndex$ = new BehaviorSubject<number>(0);
  private _buyIndex$ = new BehaviorSubject<number>(0);
  private _yetToBeCalculated = signal(true);

  calculateMaxProfit(prices: number[]): void {
    this._resetValues();
    const lastIndex = prices.length - 1;
    let minPrice = prices[0];
    let minPriceIndex = 0;

    prices.forEach((price, priceIndex) => {
      if (price < minPrice && priceIndex < lastIndex) {
        minPrice = price;
        minPriceIndex = priceIndex;
      }
      const profit = price - minPrice;
      if (profit > this._maxProfit$.value && priceIndex > 0) {
        this._maxProfit$.next(profit);
        this._buyIndex$.next(minPriceIndex);
        this._sellIndex$.next(priceIndex);
      }
    });

    this._yetToBeCalculated.set(false);
  }

  getProfitData(): Observable<ProfitData> {
    return of({
      maxProfit: this._maxProfit$.value,
      sellIndex: this._sellIndex$.value,
      buyIndex: this._buyIndex$.value,
    })
  }

  yetToBeCalculated(): boolean {
    return this._yetToBeCalculated();
  }

  private _resetValues(): void {
    this._maxProfit$.next(0);
    this._sellIndex$.next(0);
    this._buyIndex$.next(0);
  }
}
