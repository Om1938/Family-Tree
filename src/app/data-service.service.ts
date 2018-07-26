import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }
  api:string ="http://192.168.42.156:3000";

  getData(){
    console.log("Call to hua hai"); 
    const options ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.get(this.api + '/getdata');
  }

  addNode(data){
    console.log(data); 
    const options ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post(this.api + '/register',{},options);
  }

  addRelation(data){
    console.log(data); 
    const options ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.get(this.api + '/getdata');
  }

  delNode(data){
    console.log(data); 
    const options ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.get(this.api + '/getdata');
  }
}

