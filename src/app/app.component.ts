import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'apptwo';

  InputText:string="Yolanda";
  putontext:string ="Jones";
  number:number=20;
  
  pressHere(){ 

    console.log (this.InputText)
    console.log (this.putontext)
    console.log (this.number)
  }
  

}

