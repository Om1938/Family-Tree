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
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;
    dataService.getData().subscribe((res: any) => {
      this.sync(res);
      this.ready = true;
    })
  }
  sync(res) {
    res.nodes.forEach(element => {
      this.nodeData.push(element);
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
