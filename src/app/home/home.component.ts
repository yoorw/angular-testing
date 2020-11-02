import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.all().subscribe((res) => {
      console.log(
        '\n\n THESE ARE THE USERS res: \n',
        res
      );
      this.users = res;
    })
  }

}
