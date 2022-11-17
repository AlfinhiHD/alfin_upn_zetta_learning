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
      'id': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl(null, Validators.required),
      'position': new FormControl(null, Validators.required),
      'maritalStatus': new FormControl(null, Validators.required),

      'addresses': new FormGroup({
        'address': new FormControl(null, Validators.required),
        'zipcode': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'country': new FormControl(null, Validators.required),
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




