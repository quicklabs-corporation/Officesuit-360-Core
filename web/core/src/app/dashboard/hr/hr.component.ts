import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ql-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.less']
})
export class HrComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
    
  }

}
