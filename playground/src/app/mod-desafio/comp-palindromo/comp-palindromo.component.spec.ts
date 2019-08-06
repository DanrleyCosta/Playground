import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPalindromoComponent } from './comp-palindromo.component';

describe('CompPalindromoComponent', () => {
  let component: CompPalindromoComponent;
  let fixture: ComponentFixture<CompPalindromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPalindromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPalindromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
