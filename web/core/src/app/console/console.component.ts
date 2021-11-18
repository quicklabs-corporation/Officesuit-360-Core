import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ql-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ConsoleComponent implements OnInit {
  selectedModule: string = 'apps';
  constructor(private readonly router: Router) {

  }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  navigateTo(path: string): void {
    this.selectedModule = path;
    this.router.navigate([`/console/${path}`]).then(() => { })
  }
}
