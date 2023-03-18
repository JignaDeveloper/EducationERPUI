import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapertypeComponent } from './papertype.component';

describe('PapertypeComponent', () => {
  let component: PapertypeComponent;
  let fixture: ComponentFixture<PapertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapertypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
