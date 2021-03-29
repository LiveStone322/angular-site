import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { getInitialState } from 'src/app/store/state/app.state';

import { DimImageComponent } from './dim-image.component';

describe('DimImageComponent', () => {
  let component: DimImageComponent;
  let fixture: ComponentFixture<DimImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DimImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimImageComponent);
    component = fixture.componentInstance;
    component.name = 'sun';
    component.src = 'assets/sun.png';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
