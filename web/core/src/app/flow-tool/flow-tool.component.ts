import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ql-flow-tool',
  templateUrl: './flow-tool.component.html',
  styleUrls: ['./flow-tool.component.less']
})
export class FlowToolComponent implements OnInit {
  @ViewChild('canvas')
  canvasEl!: ElementRef<HTMLElement>;
  @ViewChild('details')
  details!: ElementRef<HTMLElement>;

  constructor() {

  }

  ngOnInit(): void {
  }

  drag(ev: any) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drop(ev: any) {
    ev.preventDefault();
    if (this.canvasEl) {
      console.log(this.canvasEl);
      // this.canvasEl.nativeElement.appendChild();
    }
  }
}
