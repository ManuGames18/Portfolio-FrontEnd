import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Slot } from './slot/slot';

@Component({
  selector: 'app-pulled-apart',
  templateUrl: './pulled-apart.component.html',
  styleUrls: ['./pulled-apart.component.css']
})
export class PulledApartComponent {
  @Input() id: number = 0;
  @Input() name: string = "";
  @Input() slots: Slot[] = [];
  @Output() destroy = new EventEmitter();
  addSlot: boolean = false;

  imageUrl: string = "";
  slotName: string = "";
  slotText: string = "";
  slotLink: string = "";

  toggleAddSlot(){
    if(this.addSlot && this.imageUrl.length > 0 && this.slotName.length > 0 && this.slotText.length > 0){
      const slot: Slot = {id: 0, pulledApartId: this.id, name: this.slotName, imageUrl: this.imageUrl, text: this.slotText, urlLink: this.slotLink}
      this.AddSlot(slot);
      this.imageUrl = this.slotName = this.slotText = "";
    }
    this.addSlot = !this.addSlot;
  }

  AddSlot(slot: Slot){
    this.slots.push(slot);
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

  destroyPulledApart(){
    this.destroy.emit(this.name);
  }

  destroySlot(slotName: String){
    this.slots = this.slots.filter(slot=>slot.name !== slotName)
  }
}
