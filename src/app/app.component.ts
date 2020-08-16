import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Club, League } from './app-data';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private sub1: Subscription;
  private sub2: Subscription;
  private leagues: League[];
  private clubs: Club[];

  constructor(private service: AppService) {
  }

  ngOnInit(): void {
    console.clear();
    this.exercise1();
    this.exercise2();
  }

  exercise1(): void {
    this.sub1 = this.service.getLeages()
      .subscribe(leagues => this.leagues = leagues);
  }

  exercise2(): void {
    this.sub2 = this.service.getClubs()
      .subscribe(clubs => this.clubs = clubs);
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
