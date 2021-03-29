import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { LanguagedTextModule } from 'src/app/shared/languaged-text/languaged-text.module';
import { getInitialState } from 'src/app/store/state/app.state';

import { LinksComponent } from './links.component';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModule, LanguagedTextModule],
      declarations: [LinksComponent],
      providers: [provideMockStore({ initialState: getInitialState() })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
