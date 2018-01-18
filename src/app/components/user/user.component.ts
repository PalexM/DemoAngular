import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor( ) { }

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  isEdit:boolean;

  ngOnInit() {
    this.name = 'Toto';
    this.age = 30;
    this.email = 'tot.toto@toto.com';
    this.address = {
      street: '50 rue de Paris',
      city: 'Paris',
      country: 'France'
    };
    this.hobbies = ['Sport', 'Music', 'Photo'];
    this.isEdit = false;

  }
  addHobby(hobby){
    this.hobbies.push(hobby)
  }

  deletehobby(hobby){
    for( let i=0; i < this.hobbies.length; i++){
      if(this.hobbies[i] === hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  editUser(){
    this.isEdit =!this.isEdit;
  }

}

interface Address {
  street: string;
  city: string;
  country: string;
}
