import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomzadasComponent } from './diretivas-customzadas.component';

describe('DiretivasCustomzadasComponent', () => {
  let component: DiretivasCustomzadasComponent;
  let fixture: ComponentFixture<DiretivasCustomzadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasCustomzadasComponent]
    });
    fixture = TestBed.createComponent(DiretivasCustomzadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
