import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sb-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less']
})
export class TextComponent implements OnInit {
  @Input() type: string = 'base';
  constructor() { }

  ngOnInit(): void {
     if(!environment.production) {
       console.log('text components has style types of ["largetitle", "title1", "title2", "title3", "title4"]');
     }
  }

}
