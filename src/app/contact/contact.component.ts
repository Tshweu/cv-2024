import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class ContactUser {
  fullName: string;
  phoneNumber: string;
  email: string;
  github: string;

  constructor(
    fullName: string,
    phoneNumber: string,
    email: string,
    github: string
  ) {
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.github = github;
  }
}
// import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactComponent implements OnInit {
  userModel: ContactUser = new ContactUser(
    'Tshweu Sephiri',
    '067 951 3316',
    't.t.sephiri@gmail.com',
    'www.github.com/Tshweu'
  );

  constructor() // private _contactService:ContactService
  {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.userModel);
    // this._contactService.enroll(this.userModel)
    // .subscribe(
    //   error => console.error('Error',error),
    //   res =>  {alert('Your message has been sent.'),
    //             console.log(res);
    //             this.userModel = new ContactUser('','','','','');
    //           }
    // )
  }
}
