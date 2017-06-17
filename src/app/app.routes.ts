/**
 * Created by jh0n4 on 16/6/17.
 */
import { RouterModule, Routes} from '@angular/router';
import { VideoGameComponent } from './components/video-game/video-game.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';

const APP_ROUTES: Routes = [
  { path: 'video-juego/:id', component: VideoGameComponent },
  { path: 'marketgames', component: VideoGamesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'marketgames' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
