import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidosComponent } from './bienvenidos.component';

describe('BienvenidosComponent', () => {
  let component: BienvenidosComponent;
  let fixture: ComponentFixture<BienvenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BienvenidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienvenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
