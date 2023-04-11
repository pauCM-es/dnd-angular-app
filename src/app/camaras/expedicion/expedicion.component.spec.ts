import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedicionComponent } from './expedicion.component';

describe('ExpedicionComponent', () => {
  let component: ExpedicionComponent;
  let fixture: ComponentFixture<ExpedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpedicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
