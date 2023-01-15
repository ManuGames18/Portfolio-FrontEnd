import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.css']
})
export class HeaderButtonComponent {
  @Input() text: string = "";
  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }
}
