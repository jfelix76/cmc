import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'picture-frame',
  templateUrl: './picture-frame.component.html',
  styleUrls: ['./picture-frame.component.scss']
})
export class PictureFrameComponent implements OnInit {

  @Input() image: string;
  @Input() label: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {}

}
