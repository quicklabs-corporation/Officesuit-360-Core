import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ql-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.less']
})
export class ShortcutComponent implements OnInit {
  @Input() shortcut!: string;
  shortcutKeys!: string[];
  constructor() { }

  ngOnInit(): void {
    if (this.shortcut) {
      this.shortcutKeys = this.shortcut.split('+').join(' + ').split(' ');
    }
  }

}
