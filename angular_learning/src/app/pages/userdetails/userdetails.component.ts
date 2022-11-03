import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  @Input('userDet') list: {
    fname: string;
    lname: string;
    age: number;
    position: string;
    interest: string;
    img: string;
    profil: string;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.list)
  }

 

  
  
}
