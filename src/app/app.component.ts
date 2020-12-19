import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  subtitle = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.title = event.state.root.firstChild.data.title;
        this.subtitle = event.state.root.firstChild.data.subtitle;
      }
    });
  }
}
