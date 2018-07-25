import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }
  api:string ="http://192.168.32.229:3000";

  getData(){
    console.log("Call to hua hai"); 
    const options ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    // return this.http.get<any>(this.api + '/getdata',options).pipe(map((res:any)=>{
    //   console.log("hh");
    //   console.log(res);
    //   return res;
    // }))
    return this.http.get(this.api + '/getdata');
  }
}

