import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'ql-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MyprofileComponent implements OnInit {
  date: any = Date.now();
  status: any = 'available';
  webcheckin: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/dashboard/myprofile/overview']);
  }

}
