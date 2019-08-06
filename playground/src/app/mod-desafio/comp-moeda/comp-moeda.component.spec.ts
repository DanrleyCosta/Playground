import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMoedaComponent } from './comp-moeda.component';

describe('CompMoedaComponent', () => {
  let component: CompMoedaComponent;
  let fixture: ComponentFixture<CompMoedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMoedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
