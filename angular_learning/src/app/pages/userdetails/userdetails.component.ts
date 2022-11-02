import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('userDet') list2: {
    fname: string;
    lname: string;
    age: number;
    position: string;
    interest: string;
  }
  

}
