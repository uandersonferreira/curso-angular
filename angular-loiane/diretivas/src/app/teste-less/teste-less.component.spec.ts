import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteLessComponent } from './teste-less.component';

describe('TesteLessComponent', () => {
  let component: TesteLessComponent;
  let fixture: ComponentFixture<TesteLessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteLessComponent]
    });
    fixture = TestBed.createComponent(TesteLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
