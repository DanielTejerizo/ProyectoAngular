import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroConsultarComponent } from './libro-consultar.component';

describe('LibroConsultarComponent', () => {
  let component: LibroConsultarComponent;
  let fixture: ComponentFixture<LibroConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroConsultarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibroConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
