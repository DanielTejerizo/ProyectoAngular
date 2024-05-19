import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroInsertarComponent } from './libro-insertar.component';

describe('LibroInsertarComponent', () => {
  let component: LibroInsertarComponent;
  let fixture: ComponentFixture<LibroInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroInsertarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibroInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
