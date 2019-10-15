import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  visibleSidebar1;
  constructor() { }

  ngOnInit() {
  }
  click(){
    this.visibleSidebar1=true;
  }
}
