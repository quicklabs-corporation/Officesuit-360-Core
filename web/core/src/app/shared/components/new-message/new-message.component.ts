import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewMessageService } from './new-message.service';

@Component({
  selector: 'ql-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class NewMessageComponent implements OnInit {
  visible = false;
  inputValue?: string;
  allEmails = [
    { name: 'Surya Kavutrapu', type: 'suryakavutarapu@gmail.com' },
    { name: 'Navya Sutari', type: 'navyasutari@gmail.com' },
    { name: 'Anu Lekha', type: 'anulekha@gmail.com' },
    { name: 'Rajendra Cherukuri', type: 'rajendracherukuri@gmail.com' },
  ];

  listOfOption: Array<{ label: string; value: string }> = [];
  listOfSelectedValue = [];

  constructor(private readonly newMessageService: NewMessageService) { }

  ngOnInit(): void {
    this.newMessageService.listenToAction().subscribe(res => {
      if (!this.visible) {
        this.open();
      }
    })

    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

  valueWith = (data: { name: string; type: string }): string => data.name;

  onSelect(value: string): void {
    console.log(value);
  }

  // isNotSelected(value: string): boolean {
  //   return this.listOfSelectedValue.indexOf(value) === -1;
  // }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
