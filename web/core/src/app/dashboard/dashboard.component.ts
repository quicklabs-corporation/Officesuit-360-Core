import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ql-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  selectedModule: string = 'connect';
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.router.navigate([`/dashboard/${this.selectedModule}`]).then(() => {})
  }

  navigateTo(path: string): void {
    this.selectedModule = path;
    this.router.navigate([`/dashboard/${path}`]).then(() => {})
  }
}
