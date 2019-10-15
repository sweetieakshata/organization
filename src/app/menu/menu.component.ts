import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() sidebar = new EventEmitter();
  visibleSidebar1;
  constructor() { }

  ngOnInit() {
  }
  OnClick(){
    this.sidebar.emit();

  }
}
