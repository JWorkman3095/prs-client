import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("About","/about"),
    new Menu("Users", "/user"),
    new Menu("Vendors", "vendor"),
    new Menu("Products", "/product"),
    new Menu("Requests", "/request"),
    new Menu("Login", "/login")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
