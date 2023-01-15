import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-x-button',
  templateUrl: './x-button.component.html',
  styleUrls: ['./x-button.component.css']
})
export class XButtonComponent {
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();
  faX = faX;

  onClick(){
    this.btnClick.emit();
  }
}
