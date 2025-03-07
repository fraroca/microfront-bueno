import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbiGestionComponent } from './ibi-gestion.component';

describe('IbiGestionComponent', () => {
  let component: IbiGestionComponent;
  let fixture: ComponentFixture<IbiGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IbiGestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IbiGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
