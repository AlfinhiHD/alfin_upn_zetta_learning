import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    addresses: any
  }
  genders = ['Male', 'Female']

  constructor(private userService: UserService, 
    private router: Router, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {}
  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userEdit = this.userService.getUser(this.userService.userData.findIndex(item => {
        return item.id === params['id']
      }))
      console.log(this.userEdit)
  })

    this.signupForm = this.formBuilder.group({
      id: [null, Validators.required],
      username: [null, Validators.required],
      age: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: [null ,Validators.required],
      position: [null,Validators.required],
      maritalStatus: [null, Validators.required],
      addresses: this.formBuilder.array([])
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
      addresses: this.signupForm.value.addresses
    }
    this.userService.editUser(this.userEdit)
    console.log(this.userEdit)
    this.router.navigate([''])
  }

  get getAddressData() {
    return this.signupForm.get('addresses') as FormArray
  }

  onAddAddresses(){
    const addressProp = this.formBuilder.group({
      address: [null, Validators.required],
      zipcode: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required]
    })

    this.getAddressData.push(addressProp)
  }

  onDeleteAddresses(i: any){
    this.getAddressData.removeAt(i)
  }

}




