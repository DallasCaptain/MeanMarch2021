import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Hello Angular';
  tasks:Array<{name:string,completed:boolean}>

  newTask:{name:string,completed:boolean}

  constructor(private _HttpService: HttpService){}

  ngOnInit(){
    this.tasks=[]
    this.newTask = {name:'',completed:false}
    console.log('this.tasks',this.tasks)
    this._HttpService.getTasks()
    .subscribe(data => {
      this.tasks = data
      console.log('this.tasks',this.tasks)
    })
  }

  dodishes(){
    this.tasks[0].completed = true
    this._HttpService.updateTask(this.tasks[0],0)
    .subscribe(data=>{
      console.log('after doing dishes',data)
    })
  }


  onSubmit(){
    console.log('newTask:',this.newTask)
    this.newTask.name = 'Bob'
    
  }

}
