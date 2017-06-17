import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../../interfaces/video-game.interface';
import { VideoGameService } from '../../services/video-game.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './video-games.component.html',
  styles: []
})
export class VideoGamesComponent implements OnInit {
  marketgames: VideoGame[] = [];
  totalGamesPrize: number;
  tipoArticulo: string;
  articulos: any[] = [];

  constructor(private _videoGameService: VideoGameService) {
    this._videoGameService.consultarMarketGames()
      .subscribe(
        resultados => {
          this.totalGamesPrize = 0;
          for ( const key$ in resultados ) {
            const juegoNew = resultados[key$];

            this.articulos.push(resultados[key$]['tipo']);

            if ( resultados[key$]['tipo'] === 'videojuego') {
              console.log('Es videojuego');
              this.tipoArticulo = 'videojuegos';
              this.totalGamesPrize += resultados[key$]['total'];
            }

            juegoNew.id = key$;
            this.marketgames.push(juegoNew);
          }
          // this.marketgames = resultados;
        }
      );
  }

  ngOnInit() {
  }

  eliminar(id: string, posicion) {
    // console.log('Se elimino el id: ' + id + ' con indice: ' + i);


    this._videoGameService.eliminarJuego(id)
      .subscribe(
        resultado => {
          console.log('Se elimino el id: ' + id + ' con indice: ' + posicion);
          this.marketgames.splice(posicion, 1);
        }
      );
  }
}
