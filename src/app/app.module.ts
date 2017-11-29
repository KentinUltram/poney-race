import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RaceComponent } from './components/race/race.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { RaceService } from './services/race.service';
import { HomeComponent } from './components/home/home.component';
import {rootRouterConfig} from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    HighlightDirective,
    RaceComponent,
    CapitalizePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [CapitalizePipe, RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
