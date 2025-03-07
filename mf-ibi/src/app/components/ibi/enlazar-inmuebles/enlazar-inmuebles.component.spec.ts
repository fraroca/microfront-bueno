import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlazarInmueblesComponent } from './enlazar-inmuebles.component';

describe('EnlazarInmueblesComponent', () => {
  let component: EnlazarInmueblesComponent;
  let fixture: ComponentFixture<EnlazarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlazarInmueblesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnlazarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
