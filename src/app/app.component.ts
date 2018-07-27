import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
import { DataServiceService } from './data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navstat = "Hide Options";
  nodes: Node[] = [];
  links: Link[] = [];
  nodeData: any[] = [];
  linkData: any[] = [];

  againres: any;
  ress: any;

  ready: boolean = false;
  constructor(private dataService: DataServiceService) {
    this.dispNodes();
  }
  refresh(){
    this.ready = false;
    this.dispNodes();
  }
  dispNodes(){
    this.nodes.length = 0;
    this.links.length = 0;
    this.dataService.getData().subscribe((res: any) => {
      this.sync(res);
      this.ready = true;
    })
  }
  sync(res) {
    res.nodes.forEach(element => {
      this.nodes.push(new Node(element));
    });
    res.relations.forEach(element => {
      this.links.push(new Link(element.start, element.end));
    })
    console.log(this.nodes);
  }
  clicked(){
    if(this.navstat == "Hide Options"){
      this.navstat = "Show Options";
    }else{
      this.navstat = "Hide Options";
    }
  }
}
