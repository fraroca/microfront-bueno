import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTasasComponent } from './datos-tasas.component';

describe('DatosTasasComponent', () => {
  let component: DatosTasasComponent;
  let fixture: ComponentFixture<DatosTasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosTasasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosTasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
