import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="Print content"
  evenNumbers:number[]=[];
  oddNumbers:number[]=[];

  onIntervalFired(firedNumber:number){
      if(firedNumber%2===1){
        this.oddNumbers.push(firedNumber)
      }else{
        this.evenNumbers.push(firedNumber)
      }
  }
}
