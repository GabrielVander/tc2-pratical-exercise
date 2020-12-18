import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private colors = [
    '#FF82A9',
    '#7F95D1',
    '#2EC4B6',
    '#E71D36',
    '#FF9F1C',
  ];

  constructor() { }

  get randomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getColor(index: number): string {
    try {
      return this.colors[index];
    }
    catch (e) {
      console.error(e);
      return this.randomColor;
    }
  }

}
