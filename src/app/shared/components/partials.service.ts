import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartialsService {
  menuBtnClickEmiter = new EventEmitter<boolean>();
}
