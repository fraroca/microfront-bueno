import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGraphqlComponent } from './datos-graphql.component';

describe('DatosGraphqlComponent', () => {
  let component: DatosGraphqlComponent;
  let fixture: ComponentFixture<DatosGraphqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosGraphqlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosGraphqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
