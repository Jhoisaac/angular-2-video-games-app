import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { VideoGameService } from './services/video-game.service';

import { AppComponent } from './app.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';
import { VideoGameComponent } from './components/video-game/video-game.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent,
    VideoGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    Angular2FontawesomeModule
  ],
  providers: [
    VideoGameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
