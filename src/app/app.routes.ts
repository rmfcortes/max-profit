import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'routeA',
        pathMatch: 'full'
    },
    {
        path: 'routeA',
        loadComponent: () => import('./route-a/route-a.component').then(mod => mod.RouteAComponent),
    },
    {
        path: 'routeB',
        loadComponent: () => import('./route-b/route-b.component').then(mod => mod.RouteBComponent),
    }
];
