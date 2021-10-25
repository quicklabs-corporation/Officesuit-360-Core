import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ql-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less']
})
export class PeopleComponent implements OnInit {
  members: any;
  teams: any;
  constructor() {
    this.members = [{ name: 'Surya Kavutarapu' }, { name: 'Gupth Yechuri' }, { name: 'Rajendra Cherukuri' }];
    this.teams = [{ name: 'HR Team', team: true }, { name: 'Marketing Team', team: true }, { name: 'Sales Team', team: true }, { name: 'Admin', team: true }];
  }

  ngOnInit(): void {

  }

}
