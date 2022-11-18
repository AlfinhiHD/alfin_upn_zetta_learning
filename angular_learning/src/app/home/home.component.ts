import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList: {
    id: string,
    username: string,
    age: number,
    email: string,
    gender: string,
    position: string,
    maritalStatus: string,
    addresses: any
  }[] = []
  searchPipes = ''

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userList = this.userService.userData
  }

}
