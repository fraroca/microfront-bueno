import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosIvtmComponent } from './datos-ivtm.component';

describe('DatosIvtmComponent', () => {
  let component: DatosIvtmComponent;
  let fixture: ComponentFixture<DatosIvtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosIvtmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosIvtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
