import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimImageComponent } from './dim-image.component';

describe('DimImageComponent', () => {
  let component: DimImageComponent;
  let fixture: ComponentFixture<DimImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
