import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  signupForm: FormGroup;
  userData: {
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
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      id: [null, Validators.required],
      username: [null, Validators.required],
      age: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: [null ,Validators.required],
      position: [null,Validators.required],
      maritalStatus: [null, Validators.required],
      addressData: this.formBuilder.array([])
    })
  }

  onSubmit(){
    this.userData = {
      id: this.signupForm.value.id,
      username: this.signupForm.value.username,
      age: this.signupForm.value.age,
      email: this.signupForm.value.email,
      gender: this.signupForm.value.gender,
      position: this.signupForm.value.position,
      maritalStatus: this.signupForm.value.maritalStatus,
      addresses: this.signupForm.value.addresses
    }
    if(this.userService.addUser(this.userData) === 1){
      this.router.navigate([''])
    }
  }

  get getAddressData() {
    return this.signupForm.get('addressData') as FormArray
  }

  onAddAddresses(){
    const addresses = this.formBuilder.group({
      address: [null, Validators.required],
      zipcode: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required]
    })

    this.getAddressData.push(addresses)
  }

  onDeleteAddresses(i: any){
    this.getAddressData.removeAt(i)
  }

  


}
