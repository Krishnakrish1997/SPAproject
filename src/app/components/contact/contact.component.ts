import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactDetails={phoneNo: '+91 9323227272',emailId: 'krish@gmail.com',linkedIn:'krishna6372',faceBook:'krish',insta:'lonely_girl',twitter:'krishna_987'}
  constructor() { }

  ngOnInit(): void {
  }

}
