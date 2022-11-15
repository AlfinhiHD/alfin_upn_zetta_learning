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
      address: 'Perumnas',
      zipcode: 334422,
      city: 'Yogyakarta',
      country: 'Indonesia'
    },
    {
      id: 'MD1',
      username: 'Himawati',
      age: 20,
      email: 'himawati@email.com',
      gender: 'Female',
      position: 'Mobile Developer',
      maritalStatus: 'Married',
      address: 'Pogung',
      zipcode: 321123,
      city: 'Yogyakarta',
      country: 'Indonesia'
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
    const temp = this.userData.map(item => item.id).indexOf(param.id);
    console.log(temp)
    if(temp !== -1){
      this.userData[temp].username = param.username
      this.userData[temp].age = param.age
      this.userData[temp].email = param.email
      this.userData[temp].gender = param.gender
      this.userData[temp].position = param.position
      this.userData[temp].maritalStatus = param.maritalStatus
      this.userData[temp].address = param.address
      this.userData[temp].zipcode = param.zipcode
      this.userData[temp].city = param.city
      this.userData[temp].country = param.country
    } 
  }

  getUser(index: any){
    return this.userData[index]
  }
}