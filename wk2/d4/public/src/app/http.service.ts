import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) { }
  
  getTasks(){
    return this._http.get<{name:string,completed:boolean}[]>('/api/tasks')
    
  }
  updateTask(task, index) {
    return this._http.post('/api/tasks/'+index,task)
  }
  
}
