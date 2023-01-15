import { Component } from '@angular/core';
import { PulledApart } from './pulled-apart/pulled-apart';
import { Slot } from './pulled-apart/slot/slot';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pulledAparts: PulledApart[] = [
    {
      name:"Hola", slots: [{
        name: "Hola", imageUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fhola-word-lettering-spanish-hello-260nw-2170222797.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fhola&tbnid=CNzPDmhNnVUzyM&vet=12ahUKEwj21dSW88f8AhV7g5UCHYEwAYcQMygCegUIARDuAQ..i&docid=czDLHibCz6tQRM&w=409&h=280&q=hola&client=opera-gx&ved=2ahUKEwj21dSW88f8AhV7g5UCHYEwAYcQMygCegUIARDuAQ",
        text: "Hola como estas?", urlLink:""
      }]
    }]
  addPulledApart: boolean = false;
  pulledApartName: string = "";

  toggleAddPulledApart(){
    if(this.addPulledApart && this.pulledApartName.length !== 0){
      const slots: Slot[] = [];
      const newPulledApart = {name:this.pulledApartName, slots:slots}
      this.AddPulledApart(<PulledApart>newPulledApart);
      this.pulledApartName = "";
    }
    this.addPulledApart = !this.addPulledApart;
  }

  AddPulledApart(newPulledApart:PulledApart): void{
    this.pulledAparts.push(newPulledApart);
  }

  destroyPulledApart(name: String){
    this.pulledAparts = this.pulledAparts.filter(pulled=>pulled.name != name);
  }
}