import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData = [
    {
      id: 'WD1',
      username: 'Alfin',
      age: 19,
      email: 'alfin@email.com',
      gender: 'Male',
      position: 'Web Developer',
      maritalStatus: 'Single',
      addresses: [
      {
        address: 'Perumnas',
        zipcode: 334422,
        city: 'Yogyakarta',
        country: 'Indonesia'
      },
      {
        address: 'Banjarnegara',
        zipcode: 334422,
        city: 'Banjarnegara',
        country: 'Indonesia'
      }]      
    },

    {
      id: 'MD1',
      username: 'Himawati',
      age: 20,
      email: 'himawati@email.com',
      gender: 'Female',
      position: 'Mobile Developer',
      maritalStatus: 'Married',
      addresses: [
      {
        address: 'Pogung',
        zipcode: 321123,
        city: 'Yogyakarta',
        country: 'Indonesia'
      },
      {
        address: 'Banjarnegara',
        zipcode: 334422,
        city: 'Banjarnegara',
        country: 'Indonesia'
      }]     
    }
  ]


  msg : number

  constructor() { }

  addUser(param: any) {
    if(this.userData.map(item => item.id).indexOf(param.id) === -1){
      this.userData.push(param)
      return this.msg=1
    } else {
      alert('Please Input Different ID')
      return this.msg=0
    } 
  }

  editUser(param: any) {
    console.log(param.id)
    for (let index = 0; index < this.userData.length; index++) {
      if (this.userData[index].id == param.id) {
        this.userData[index].id = param.id,
          this.userData[index].username = param.username,
          this.userData[index].age = param.age,
          this.userData[index].gender = param.gender,
          this.userData[index].email = param.email,
          this.userData[index].position = param.position,
          this.userData[index].maritalStatus = param.maritalStatus,
          this.userData[index].addresses = param.addresses
          // this.userData[index].zipcode = param.zipcode,
          // this.userData[index].city = param.city,
          // this.userData[index].country = param.country
      }
    }
  }

  getUser(index: any){
    return this.userData[index]
  }
}
