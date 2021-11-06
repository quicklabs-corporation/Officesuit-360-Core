import { Component, OnInit } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js';

@Component({
  selector: 'ql-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  quillConfiguration = {
    'emoji-shortname': true,
    'emoji-textarea': false,
    'emoji-toolbar': true,
    toolbar: {
      container: [['bold', 'italic', 'underline', 'strike','blockquote', 'code-block','emoji']],
      handlers: { 'emoji': function () { } }
    },
  }
  constructor() { }

  ngOnInit(): void {
  }
}
