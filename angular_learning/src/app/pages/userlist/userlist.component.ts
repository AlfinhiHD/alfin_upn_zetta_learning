import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Employee = [
    { fname: 'Bima', lname: 'Tirta', age: '29', position: 'Web Developer', interest: 'Playing Cards'},
    { fname: 'Sitti', lname: 'Aminah', age: '28', position: 'Web Developer', interest: 'Dancing'},
    { fname: 'Idris', lname: 'Daud', age: '18', position: 'Mobile Developer', interest: 'Playing Basketball'},
    { fname: 'Iman', lname: 'Hadijah', age: '21', position: 'Quality Assurance', interest: 'Playing Games'},
    { fname: 'Bima', lname: 'Burhanuddin', age: '25', position: 'Project Manager', interest: 'Watching Anime'}
  ]

}
