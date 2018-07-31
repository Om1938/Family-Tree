import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  api: string = "http://192.168.32.229:3000";

  getData() {
    //console.log("Call to hua hai");
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.api + '/getdata');
  }

  addNode(data) {
    console.log(data);
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api + '/register', data, { headers: headers });
  }

  addRelation(data) {
    console.log(data);
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api + '/addRelation', data, { headers: headers });
  }

  delNode(data) {
    console.log(data);
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.api + '/delNode', data, { headers: headers });
  }
}

