import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngular5App';
  inputvariable = "hello i am your parent";
  constructor()
  {
     console.log("Hey i am component");
     
  }

  getData(value)
  {
    console.log(value);
  }

}
