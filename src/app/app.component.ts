import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router
      .events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
              if (child.firstChild) {
                child = child.firstChild;
              } else if (child.snapshot.data && child.snapshot.data['title']) {
                return child.snapshot.data['title'];
              } else {
                return null;
              }
            }
            return null;
          }
        )
      ).subscribe((title: string) => {
        this.titleService.setTitle(title);
      }
    );
  }
}
