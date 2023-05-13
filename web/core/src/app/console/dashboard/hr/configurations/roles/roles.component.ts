import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ql-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.less']
})
export class RolesComponent implements OnInit {
  roles: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
