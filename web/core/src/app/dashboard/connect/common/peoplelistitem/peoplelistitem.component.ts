import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ql-peoplelistitem',
  templateUrl: './peoplelistitem.component.html',
  styleUrls: ['./peoplelistitem.component.less']
})

export class PeoplelistitemComponent implements OnInit {
  @Input() data: any;
  randomColor: any = this.generateColor();
  letter: any;
  constructor() { }

  ngOnInit(): void {
    this.letter = this.getLetterFromName();
  }

  getLetterFromName(): string {
    const name = this.data.name as string;
    return name.charAt(0);
  }

  generateColor(): any {
    return {
      backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
      color: 'white'
    }
  }

}
