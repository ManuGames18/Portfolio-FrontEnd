import { Component } from '@angular/core';
import { PulledApart } from './pulled-apart/pulled-apart';
import { Slot } from './pulled-apart/slot/slot';
import { HomeService } from 'src/app/serivices/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pulledAparts: PulledApart[] = [
    {
      id: 1,
      name: "hola",
      slots: [
        {
          id: 1,
          pulledApartId: 1,
          name: "hola",
          text: "ola k ace",
          imageUrl: "",
          urlLink: ""
        }
      ]
    }
  ]
  addPulledApart: boolean = false;
  pulledApartName: string = "";

  constructor(private service: HomeService){ }

  toggleAddPulledApart(){
    if(this.addPulledApart && this.pulledApartName.length !== 0){
      const slots: Slot[] = [];
      const newPulledApart = {id:this.pulledAparts.length+1 ,name:this.pulledApartName, slots:slots}
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