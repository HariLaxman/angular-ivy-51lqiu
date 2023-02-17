import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  userName: string = '';
  user: User = new User();
  arr: User[] = [];

  save(): void {
    var user1: User = new User();

    if (this.user) {
      //user1 = this.user;
      user1.id = Math.random();
      user1.name = this.user.firstName + this.user.lastName;
      this.arr.push(user1);
    }
  }
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
}
