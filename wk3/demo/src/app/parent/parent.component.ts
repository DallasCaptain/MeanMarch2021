import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentpoints: number
  constructor() { }

  ngOnInit() {
    this.parentpoints = 100
  }

  updatePoints(val){
    this.parentpoints += val
  }

}
