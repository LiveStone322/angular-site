import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { getInitialState } from 'src/app/store/state/app.state';
import { Langs } from '../models/langs.model';
import { LanguagedTextComponent } from './languaged-text.component';

describe('LanguagedTextComponent', () => {
  let component: LanguagedTextComponent;
  let fixture: ComponentFixture<LanguagedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagedTextComponent],
      providers: [provideMockStore({ initialState: getInitialState() })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagedTextComponent);
    component = fixture.componentInstance;
    component.languagedTexts = {
      [Langs.RU]: 'Тест',
      [Langs.ENG]: 'Test',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show russian text', () => {
    expect(
      fixture.debugElement.query(By.css('span')).nativeElement.innerHTML
    ).toBe('Тест');
  });
});
