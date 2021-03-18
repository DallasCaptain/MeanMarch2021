import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    console.log('init')
    this.getTasks()
  }

  getTasks(){
    console.log('getting tasks')
    const tempObservable = this._http.get('/api/tasks')

    tempObservable.subscribe(data => {
      console.log('tasks:', data)
    })
  }

}
