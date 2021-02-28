import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagedTextComponent } from './languaged-text.component';

describe('LanguagedTextComponent', () => {
  let component: LanguagedTextComponent;
  let fixture: ComponentFixture<LanguagedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagedTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
