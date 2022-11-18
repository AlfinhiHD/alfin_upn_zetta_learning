import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  
  signupForm: FormGroup;
  userEdit: {
    id: string,
    username: string,
    age: number,
    email: string,
    gender: string,
    position: string,
    maritalStatus: string,
    address: string,
    zipcode: number,
    city: string,
    country: string
  }
  genders = ['Male', 'Female']

  constructor(private userService: UserService, 
    private router: Router, 
    private route: ActivatedRoute) {}
  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userEdit = this.userService.getUser(this.userService.userData.findIndex(item => {
        return item.id === params['id']
      }))
      console.log(this.userEdit)
  })

    this.signupForm = new FormGroup({
      'id': new FormControl(this.userEdit.id),
      'username': new FormControl(this.userEdit.username, Validators.required),
      'age': new FormControl(this.userEdit.age, Validators.required),
      'email': new FormControl(this.userEdit.email, [Validators.required, Validators.email]),
      'gender': new FormControl(this.userEdit.gender, Validators.required),
      'position': new FormControl(this.userEdit.position, Validators.required),
      'maritalStatus': new FormControl(this.userEdit.maritalStatus, Validators.required),

      'addresses': new FormGroup({
        'address': new FormControl(this.userEdit.address, Validators.required),
        'zipcode': new FormControl(this.userEdit.zipcode, Validators.required),
        'city': new FormControl(this.userEdit.city, Validators.required),
        'country': new FormControl(this.userEdit.country, Validators.required),
      }),
    })
  }
  onEdit() {
    this.userEdit = {
      id: this.userEdit.id,
      username: this.signupForm.value.username,
      age: this.signupForm.value.age,
      email: this.signupForm.value.email,
      gender: this.signupForm.value.gender,
      position: this.signupForm.value.position,
      maritalStatus: this.signupForm.value.maritalStatus,
      address: this.signupForm.value.addresses.address,
      zipcode: this.signupForm.value.addresses.zipcode,
      city: this.signupForm.value.addresses.city,
      country: this.signupForm.value.addresses.country
    }
    this.userService.editUser(this.userEdit)
    console.log(this.userEdit)
    this.router.navigate([''])
  }

}




