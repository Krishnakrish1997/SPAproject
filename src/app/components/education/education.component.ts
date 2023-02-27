import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationDetails=[
    {institute:'SSC',name:'K G B G V school',percent:'87%',location:'Peddaraveedu'},
    {institute:'HSC',name:'Sri Chaitanya Jr.College',percent:'92%',location:'Guntur'},
    {institute:'B.Tech',name:'KKR & KSR Institute of Technology & Sciences',percent:'81%',location:'Guntur'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
