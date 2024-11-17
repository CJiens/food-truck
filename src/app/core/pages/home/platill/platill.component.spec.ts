import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillComponent } from './platill.component';

describe('PlatillComponent', () => {
  let component: PlatillComponent;
  let fixture: ComponentFixture<PlatillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
