import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private $title: BehaviorSubject<string> = new BehaviorSubject('Dashboard');

  constructor() {
  }

  get title(): BehaviorSubject<string> {
    return this.$title;
  }

  set title(value: BehaviorSubject<string>) {
    this.$title = value;
  }

  updateTitle(newTitle: string): void {
    this.title.next(newTitle);
  }
}
