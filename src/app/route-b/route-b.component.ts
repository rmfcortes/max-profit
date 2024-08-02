import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ProfitService } from '@services/profit.service';

@Component({
  selector: 'app-route-b',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './route-b.component.html',
  styleUrl: './route-b.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteBComponent implements OnInit {
  private _profitService = inject(ProfitService);
  private _router = inject(Router);
  profitData$ = this._profitService.getProfitData();

  ngOnInit(): void {
      this._profitService.yetToBeCalculated() && this._router.navigateByUrl('routeA');
  }
}
