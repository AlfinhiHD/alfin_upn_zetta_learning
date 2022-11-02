import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '[app-userlist]',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() i : number;
  @Output('detailOutput') detailUser = new EventEmitter<{dtlFname: string, dtlLname: string, dtlAge: number, dtlPosition: string, dtlInterest: string}>();

  @Input('user') list: {
    fname: string;
    lname: string;
    age: number;
    position: string;
    interest: string;
  }

  showDetail() {
    this.detailUser.emit({
      dtlFname: this.list.fname,
      dtlLname: this.list.lname,
      dtlAge: this.list.age,
      dtlPosition: this.list.position,
      dtlInterest: this.list.interest,
    })
  }



}
