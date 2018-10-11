import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() myinput : string;
  @Output() myoutput : EventEmitter<string> = new EventEmitter();
  outputstring : string = "Hola i am child";
  constructor() { }

  ngOnInit() {
    console.log(this.myinput);
  }

  sendData()
  {
    this.myoutput.emit(this.outputstring);
  }

}
