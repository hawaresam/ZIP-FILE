import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Samiksha';
  totalcartval:boolean=false;

  customFunc(data){
    this.totalcartval = data;
    console.log("In parent: "+this.totalcartval);
}
}
