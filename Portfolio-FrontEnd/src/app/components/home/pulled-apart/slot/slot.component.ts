import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent {
  @Input() name: string = "";
  @Input() imageUrl: string = "";
  @Input() text: string = "";
  @Input() urlLink: String = "";

  @Output() destroy = new EventEmitter();

  mouse: boolean = false;

  slotClick(){
    
  }

  setMouse(newMouse: boolean){
    this.mouse = newMouse;
  }

  destroySlot(){
    this.destroy.emit(this.name);
  }
}
