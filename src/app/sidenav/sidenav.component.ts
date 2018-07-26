import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  username: string = null;
  password: string = null;

  user1:string = null;
  relation: string = null;
  user2: string = null;

  user: string = null;

  constructor(private dataservice:DataServiceService) { }

  ngOnInit() {
  }
  adduser(){
    console.log("gg");
    this.dataservice.addNode({username:this.username,password:this.password}).subscribe((res: any) => {
      console.log(res);
    })
  }
  addrelation(){
    console.log("gg");
    this.dataservice.addRelation({user1:this.user1,realtion:this.relation,user2:this.user2}).subscribe((res: any) => {
      console.log(res);
    })
  }
  delnode(){
    console.log("gg");
    this.dataservice.delNode({user:this.user}).subscribe((res: any) => {
      console.log(res);
    });
  }

}
