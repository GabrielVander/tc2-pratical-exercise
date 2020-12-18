import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

interface DashboardTile {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  categories: DashboardTile[] = [
    {name: 'Card 1', color: 'primary'},
    {name: 'Card 2', color: 'accent'},
    {name: 'Card 3', color: 'warn'},
    {name: 'Card 4', color: undefined}
  ];

  constructor() {
  }
}
