import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-api';
  userName: string;
  getUserName(userName: string): void{
    this.userName = userName;
  }
}