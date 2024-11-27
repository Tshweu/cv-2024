import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class NavigationBarComponent implements OnInit {

  isCollapsed: any = true;
  menuClass:any = "";
  menuBar:any="";
  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
    this.menuClass = 'menu-btn';
    this.menuBar = 'mb-close';
  }

  checkOnClick(){
    if(this.isCollapsed){
      this.menuClass = 'menu-btn open';
      this.menuBar = 'menu-bar';
      this.isCollapsed = false;
      this.isMenuCollapsed = false;
    }else{
      this.menuClass = 'menu-btn';
      this.menuBar = 'mb-close';
      this.isCollapsed = true;
      this.isMenuCollapsed = true;
    }
  }
}
