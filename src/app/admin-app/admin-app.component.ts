import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-app',
  templateUrl: './admin-app.component.html',
  styleUrls: ['./admin-app.component.css']
})
export class AdminAppComponent implements OnInit {
  username: string;
  codeRoom: string;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    let title = this.titleService.getTitle();
    this.titleService.setTitle(`${title} | ADMIN`);
    this.username = sessionStorage.getItem('username');
    this.codeRoom = sessionStorage.getItem('codeRoom');
  }

}
