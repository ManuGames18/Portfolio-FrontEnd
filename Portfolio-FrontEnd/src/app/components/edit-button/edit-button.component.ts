import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();
  faEdit = faPen;

  onClick(){
    this.btnClick.emit();
  }
}
