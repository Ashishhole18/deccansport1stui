import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deccansportclub';

  arrayOfTheme : String[]=['alternative','alternative1','alternative2']
  theme:String;

  changeTheme()
  {
    this.theme=this.arrayOfTheme[Math.floor(Math.random()*(2-0+1)+0)];
    console.log(Math.floor(Math.random()*(2-0+1)+0));



  }
}
