import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ql-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.less']
})
export class HiringComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
   
  }

}
