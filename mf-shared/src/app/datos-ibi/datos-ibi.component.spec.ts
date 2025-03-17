import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosIbiComponent } from './datos-ibi.component';

describe('DatosIbiComponent', () => {
  let component: DatosIbiComponent;
  let fixture: ComponentFixture<DatosIbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosIbiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosIbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
