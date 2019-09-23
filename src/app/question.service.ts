import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  ParseHeaders={
    headers:new HttpHeaders({
      // 'Content-Type':'application/x-www-form-urlencoded'
    })
  };

  constructor(private http: Http,private httpClient: HttpClient) { }

  public getQuestion(id:number):Observable<any>{
    console.log("In questionservice");
		return this.httpClient.get('/api/questions/'+id);
  }
  
  public getMonitoringDevice(sendString:string):Observable<any>{
    console.log("In getMonitoringDevice "+sendString);

    return this.httpClient.post("/api/getDevices",sendString,this.ParseHeaders);

    // return this.http.post("/api/getDevices",sendString); 
  }
}
