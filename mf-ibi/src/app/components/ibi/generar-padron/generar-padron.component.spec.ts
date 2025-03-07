import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarPadronComponent } from './generar-padron.component';

describe('GenerarPadronComponent', () => {
  let component: GenerarPadronComponent;
  let fixture: ComponentFixture<GenerarPadronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarPadronComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerarPadronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
