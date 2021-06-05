import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 4 types of data binding
  // 1. interpolation
  // 2. property binding
  // 3. event binding
  // 4. two way binding
  title = 'Student Data';
  head:string = 'Interpolation';
  imgUrl: String = "https://picsum.photos/250/250";

  head2:string = 'Property binding';
  uname:string = "Two way binding";
  dis:boolean = false;
  constructor()
  {}

  change()
  {
    this.title = "changed title";
  }

}
