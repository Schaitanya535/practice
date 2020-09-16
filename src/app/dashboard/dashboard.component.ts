import { stages } from "./../data/stages";
import { userData } from "./../data/userData";
import { Component, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  // save imported data to variables
  stagesData = stages;
  userData = userData;
  
  // find the first ongoing stage
  onGoingStage = this.stagesData.find((stage) => {
    return stage.isCompleted === 0;
  });

  // get the ongoing Stage End date
  onGoingStageEndDate = this.onGoingStage.endDate
  private counter$: Observable<number>;
  private subscription: Subscription;
  message: string;
  diff: number;

  constructor() {}

  // initialize countdown upon initialistion using an obersavble
  
  ngOnInit(): void {
    this.counter$ = interval(1000).pipe(
      map((x) => {
        x = Math.floor(
          (this.onGoingStageEndDate.getTime() - new Date().getTime()) / 1000
        );
        return x;
      })
    );
    this.subscription = this.counter$.subscribe(
      (x) => (this.message = this.dhms(x))
    );
  }

  //count-down

  dhms(t) {
    if(t<0){
      overdue = "overdue by "
    }else(
      overdue = ""
    )
    t= Math.abs(t);
    var days, hours, minutes, seconds, overdue;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;
    
    return [overdue + days + "days", hours + "h", minutes + "m", seconds + "s"].join(" ");
  }
}
