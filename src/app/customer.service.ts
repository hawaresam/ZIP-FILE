import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { UserInfoDTO } from './UserInfoDTO';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }
    public saveCustomer(cust:UserInfoDTO):Observable<any>{
      console.log("Service got: "+cust.userName);
      return this.http.post('/api/users',cust,{observe: 'response'});
	}
}
