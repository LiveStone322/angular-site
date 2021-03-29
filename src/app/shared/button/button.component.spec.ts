import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from 'protractor';
import { getInitialState } from 'src/app/store/state/app.state';
import { LanguagedTextModule } from '../languaged-text/languaged-text.module';
import { Langs } from '../models/langs.model';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let componentDe: DebugElement;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagedTextModule],
      declarations: [ButtonComponent],
      providers: [provideMockStore({ initialState: getInitialState() })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text', () => {
    component.texts = {
      [Langs.RU]: 'Тест',
      [Langs.ENG]: 'Test',
    };
    fixture.detectChanges();
    expect(
      componentDe.nativeElement.querySelector('app-languaged-text').innerHTML
    ).toContain('Тест');
  });

  it('should be big', () => {
    component.isBig = true;
    fixture.detectChanges();
    expect(componentDe.nativeElement.classList.contains('big')).toBeTruthy;
  });
});
