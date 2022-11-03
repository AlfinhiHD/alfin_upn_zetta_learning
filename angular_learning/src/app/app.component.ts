import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Employee = [
    { fname: 'Bima', lname: 'Tirta', age: 29, position: 'Web Developer', interest: 'Playing Cards', img:'https://media.suara.com/pictures/653x366/2021/06/11/86780-bima-samudra.jpg', profil : 'Seseorang yang ambitius dan suka menolong sesama manusia'},
    { fname: 'Sitti', lname: 'Aminah', age: 28, position: 'Web Developer', interest: 'Dancing', img:'https://pbs.twimg.com/media/DslBJBbU8AAXIug.jpg', profil: 'Saya sangan menyukai hal hal yang rapi dan bersih'},
    { fname: 'Idris', lname: 'Daud', age: 18, position: 'Mobile Developer', interest: 'Playing Basketball', img: 'https://ak.picdn.net/offset/photos/5f482aa7a75ca0db3709f080/medium/offset_992582.jpg', profil : 'Saya tidak suka orang yang banyak bicara, action do more'},
    { fname: 'Iman', lname: 'Hadijah', age: 21, position: 'Quality Assurance', interest: 'Playing Games', img: 'https://thumbs.dreamstime.com/b/indonesian-guy-jacket-showing-thumbs-up-white-background-indonesian-guy-jacket-showing-thumbs-up-white-221923199.jpg', profil : 'Seseorang yang dapat bekerja baik dalam tim dan suka diskusi masalah apa saja'},
    { fname: 'Bima', lname: 'Burhanuddin', age: 25, position: 'Project Manager', interest: 'Watching Anime', img:'https://img.freepik.com/premium-photo/young-asian-man-wearing-give-greeting-hands-indonesian-man-grey-background_216263-1816.jpg', profil : 'Aku suka sama orang 2d, mak aku mau masuk isekai'}
  ]
  detailElements = []

  detailUser(detailInfo:{dtlFname: string, dtlLname: string, dtlAge: number, dtlPosition: string, dtlInterest: string, dtlImage: string, dtlProfil: string}){
    this.detailElements.push({
      fname: detailInfo.dtlFname,
      lname: detailInfo.dtlLname,
      age: detailInfo.dtlAge,
      position: detailInfo.dtlPosition,
      interest: detailInfo.dtlInterest,
      img: detailInfo.dtlImage,
      profil: detailInfo.dtlProfil
    })
    console.log(this.detailElements)
  }


}
