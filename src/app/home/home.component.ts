import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  codeRoom: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createBT(): void {
    if (this.username) {
      let code: string = this.genCodeRoom(8);
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('codeRoom', code);
      this.router.navigate(['/admin/view']);
    }
  }

  joinBT(): void {
    if (this.username && this.codeRoom) {
      
    }
  }

  private genCodeRoom(size: number): string {
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length: number = characters.length;
    let result: string = '';

    for (let i = 0; i < size; i++)
      result += characters.charAt(Math.floor(Math.random() * length));

    return result;
  }
}
