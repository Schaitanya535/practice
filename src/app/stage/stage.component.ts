
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  @Input() stageData;
  // take input
  constructor() { }

  ngOnInit(): void {
  }

}
