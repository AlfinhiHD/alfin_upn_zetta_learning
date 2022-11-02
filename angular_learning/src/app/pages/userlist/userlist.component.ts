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
    { name: 'Bima Tirta', age: '29', position: 'Web Developer', interest: 'Playing Cards'},
    { name: 'Sitti Aminah', age: '28', position: 'Web Developer', interest: 'Dancing'},
    { name: 'Idris Daud', age: '18', position: 'Mobile Developer', interest: 'Playing Basketball'},
    { name: 'Iman Hadijah', age: '21', position: 'Quality Assurance', interest: 'Playing Games'},
    { name: 'Bima Burhanuddin', age: '25', position: 'Project Manager', interest: 'Watching Anime'}
  ]

}
