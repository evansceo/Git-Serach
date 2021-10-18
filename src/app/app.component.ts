import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Git-Search';
  constructor( private api:ProfileService)
  {

  }
    ngOnInit()
  {
    this.api.getProfileInfo().subscribe((data: any)=>{
      console.warn("get api data",data);
      
  })
}
}