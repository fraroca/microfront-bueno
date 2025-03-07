import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosIaeComponent } from './datos-iae.component';

describe('DatosIaeComponent', () => {
  let component: DatosIaeComponent;
  let fixture: ComponentFixture<DatosIaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosIaeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosIaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
