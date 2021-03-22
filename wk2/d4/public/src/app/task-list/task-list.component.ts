import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  @Input()tasks:Array<{name:string,completed:boolean}>

  constructor() { }

  ngOnInit() {

    console.log('TL:',this.tasks)
  }


}
