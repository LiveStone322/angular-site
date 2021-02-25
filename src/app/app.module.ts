import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonModule } from './shared/button/button.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { PageModule } from './shared/page/page.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'works', loadChildren: () => import('./modules/works/works.module').then(m => m.WorksModule) },
  { path: 'skills', loadChildren: () => import('./modules/skills/skills.module').then(m => m.SkillsModule) },
  { path: 'links', loadChildren: () => import('./modules/links/links.module').then(m => m.LinksModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    ButtonModule,
    ScullyLibModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
