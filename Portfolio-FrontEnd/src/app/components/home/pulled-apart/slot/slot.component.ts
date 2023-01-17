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
  edit: boolean = false;

  slotClick(){
    
  }

  setMouse(newMouse: boolean){
    if (!this.edit) this.mouse = newMouse;
  }

  destroySlot(){
    this.destroy.emit(this.name);
  }

  captureImage(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event:any)=>{
        this.imageUrl = event.target.result;
      }
    }
  }

  editSlot(){
    this.edit = !this.edit;
  }
}
