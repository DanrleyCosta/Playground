import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompVeiculoComponent } from './comp-veiculo.component';

describe('CompVeiculoComponent', () => {
  let component: CompVeiculoComponent;
  let fixture: ComponentFixture<CompVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
