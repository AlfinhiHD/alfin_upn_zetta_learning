import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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


  msg: number

  constructor(
    private router : Router
  ) { }

  addUser(param: any) {
    if (this.userData.map(item => item.id).indexOf(param.id) === -1) {
      this.userData.push(param)

      Swal.fire(
        'New user created!',
        'Thank You!',
        'success'
      )

      return this.msg = 1
    } else {
      Swal.fire(
        'ID was used!',
        'Please input another ID',
        'error', )
      return this.msg = 0
    }
  }

  editUser(param: any) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
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

              this.router.navigate([''])
          }
        }
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        this.router.navigate([''])
      }
    })
    
  }

  getUser(index: any) {
    return this.userData[index]
  }
}
