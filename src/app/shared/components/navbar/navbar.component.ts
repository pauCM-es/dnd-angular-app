import { Component, ElementRef, OnInit } from '@angular/core';
import { PartialsService } from '../partials.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private partialsService: PartialsService){}

  ngOnInit(): void {
    
  }

  onMenuClick(){
    this.partialsService.menuBtnClickEmiter.emit(true)
  }
}
