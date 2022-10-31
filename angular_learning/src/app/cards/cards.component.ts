import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  listCards = [
    { name: 'Prambanan Temple', about: 'Prambanan is a 9th-century Hindu temple dedicated to the Trimūrti, the expression of God as the Creator, the Preserver and the Destroyer.', place: 'Yogyakarta, Indonesia', imageurl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Prambanan_Temple_Yogyakarta_Indonesia.jpg' },
    { name: 'Komodo Island', about: 'Komodo island, part of the Lesser Sunda chain of Indonesian islands, is the rugged habitat of the 3m-long Komodo dragon monitor lizard. ', place: 'East Nusa Tenggara, Indonesia', imageurl: 'https://hello-indo.com/wp-content/uploads/2020/05/2b8L9sJk-sequoia-komodo.jpeg' },
    { name: 'Mount Prau', about: 'Mount Prau has a height of 2590 meters above sea level. This mountain is in the Dieng Plateau.', place: 'Banjarnegara & Wonosobo, Indonesia', imageurl: 'https://tanijiwo.com/wp-content/uploads/2018/06/Sunrise-Mount-Prau-by-Ade-Chrisnadhi-1280x853.jpg' },
    { name: 'Garuda Wisnu Kencana Cultural Park', about: 'Garuda Wisnu Kencana Cultural Park, or GWK, is a tourist destination and attraction located island of Bali, It is devoted to the Hindu god Vishnu, and his mount, Garuda, the mythical bird who became his companion.', place: 'Bali, Indonesia', imageurl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/b7/ae.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
