import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ql-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.less']
})
export class DepartmentsComponent implements OnInit {
  departments: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
