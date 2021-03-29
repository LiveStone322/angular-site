import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { LanguagedTextModule } from 'src/app/shared/languaged-text/languaged-text.module';
import { getInitialState } from 'src/app/store/state/app.state';
import { DimImageComponent } from './components/dim-image/dim-image.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagedTextModule, NoopAnimationsModule],
      declarations: [HomeComponent, DimImageComponent],
      providers: [provideMockStore({ initialState: getInitialState() })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
