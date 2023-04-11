import { Component, OnInit } from '@angular/core';
import { PartialsService } from '../partials.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  drawerIsOpen: boolean = true
  
  constructor (private partialsService: PartialsService){}

  ngOnInit(): void {
    this.partialsService.menuBtnClickEmiter.subscribe(click => {
      // this.drawer.toggle()
      this.drawerIsOpen = !this.drawerIsOpen
      console.log(this.drawerIsOpen);
    })
    console.log(this.drawerIsOpen);
    
  }

  closeSidenav(){
    this.drawerIsOpen = false
  }
}
