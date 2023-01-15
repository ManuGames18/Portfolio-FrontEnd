import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.css']
})
export class PlusButtonComponent {
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();
  faPlus = faPlus;

  onClick(){
    this.btnClick.emit();
  }
}
