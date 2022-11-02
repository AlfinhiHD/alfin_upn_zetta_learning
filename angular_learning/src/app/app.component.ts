import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Employee = [
    { fname: 'Bima', lname: 'Tirta', age: 29, position: 'Web Developer', interest: 'Playing Cards'},
    { fname: 'Sitti', lname: 'Aminah', age: 28, position: 'Web Developer', interest: 'Dancing'},
    { fname: 'Idris', lname: 'Daud', age: 18, position: 'Mobile Developer', interest: 'Playing Basketball'},
    { fname: 'Iman', lname: 'Hadijah', age: 21, position: 'Quality Assurance', interest: 'Playing Games'},
    { fname: 'Bima', lname: 'Burhanuddin', age: 25, position: 'Project Manager', interest: 'Watching Anime'}
  ]

  detailElements = [{ fname: 'Bima', lname: 'Tirta', age: 29, position: 'Web Developer', interest: 'Playing Cards'}];

  detailUser(detailInfo:{infoFname: string, infoLname: string, infoAge: number, infoPosition: string, infoInterest: string}){
    this.detailElements.push({
      fname: detailInfo.infoFname,
      lname: detailInfo.infoLname,
      age: detailInfo.infoAge,
      position: detailInfo.infoPosition,
      interest: detailInfo.infoInterest
    })
    console.log(detailInfo)
  }

}
