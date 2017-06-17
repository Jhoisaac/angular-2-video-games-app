import { Injectable } from '@angular/core';
import { VideoGame } from '../interfaces/video-game.interface';
import { Http, Headers } from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class VideoGameService {
  // marketplaceURL = 'https://pokeapi-bf63e.firebaseio.com/pokeapi.json';
  // juegoURL = 'https://pokeapi-bf63e.firebaseio.com/pokeapi'; // -Kmhffump8iD9MnpJWIi
  marketplaceURL = 'https://datosapp-a04df.firebaseio.com/pokemon.json';
  juegoURL = 'https://pokeapi-bf63e.firebaseio.com/pokemon';

  constructor(private _http: Http) { }

  nuevoJuego(pokedexURL: VideoGame) {
    const body = JSON.stringify(pokedexURL);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.marketplaceURL, body, { headers: headers })
      .map(
        res => {
          console.log( res.json() );  // nunca se ejecuta si es que no pongo subscribe
          return res.json();
        }
      );
  }

  getJuego(indice: string) {
    const url = `${this.juegoURL}/${ indice}.json`;

    return this._http.get(url)
      .map(
        res => {
          return res.json();   // return  res.json();   return res;   return res.json;
        }
      );
  }

  consultarMarketGames() {

    return this._http.get(this.marketplaceURL)
      .map(
        res => {
          console.log( res.json() );
          return res.json();
        }
      );
  }

  editarJuego(juego: VideoGame, id: string) {
    const body = JSON.stringify(juego);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${ this.juegoURL }/${ id }.json`;

    return this._http.put( url, body, { headers: headers } )
      .map(
        res => {
          console.log( res.json() );  // nunca se ejecuta si es que no pongo subscribe
          return res.json();
        }
      );
  }

  eliminarJuego(id: string) {
    const url = `${ this.juegoURL }/${ id }.json`;

    return this._http.delete(url)
    // .map(
    //   resultado => {
    //     console.log('Estas ahi?');
    //     return resultado.json();
    //   }
    // );

      .map((res) => res.json());
  }
}
