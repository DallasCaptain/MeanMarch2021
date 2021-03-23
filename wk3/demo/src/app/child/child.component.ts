import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()parentpoints;
  @Output() changePoints = new EventEmitter()

  points: number
  constructor() { }

  ngOnInit() {
    this.points = 0
  }
  givePoints(){
    this.changePoints.emit(this.points)
  }
}
