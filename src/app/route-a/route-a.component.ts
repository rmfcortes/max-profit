import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ProfitService } from '@services/profit.service';

@Component({
  selector: 'app-route-a',
  standalone: true,
  templateUrl: './route-a.component.html',
  styleUrl: './route-a.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteAComponent {

  private _router = inject(Router);
  private _profitService = inject(ProfitService);

  continue(): void {
    this._profitService.calculateMaxProfit([150, 1, 200, 6, 250, 2500, 1]);
    this._router.navigateByUrl('routeB');
  }
}
