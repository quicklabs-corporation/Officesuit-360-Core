import { Component, OnInit } from '@angular/core';;

@Component({
  selector: 'ql-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  quillConfiguration = {
    toolbar: {
      container: [['bold', 'italic', 'underline', 'strike','blockquote', 'code-block',]],
    },
  }
  constructor() { }

  ngOnInit(): void {
  }
}
