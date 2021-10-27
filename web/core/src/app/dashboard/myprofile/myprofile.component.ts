import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ql-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.less']
})
export class MyprofileComponent implements OnInit {
  date: any = Date.now();
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/dashboard/myprofile/overview']);
  }

}
