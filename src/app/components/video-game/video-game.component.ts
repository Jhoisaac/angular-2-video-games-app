import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../../interfaces/video-game.interface';
import { VideoGameService } from '../../services/video-game.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './video-game.component.html',
  styles: []
})
export class VideoGameComponent implements OnInit {
  id: string;
  juego: VideoGame = {
    titulo: '',
    cantidad: 0,
    review: '',
    genero: '',
    precio: 0,
    total: 0,
    url: 'https://www.xtralife.es/im/portadas/portada21138.jpeg',
    tipo: '',
    id: '',
  };

  constructor(private _pokemonService: VideoGameService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params
      .subscribe(
        parametros => {
          this.id = parametros['id'];
          if (this.id !== 'nuevo') {
            this._pokemonService.getJuego(this.id)
              .subscribe(
                resultado => {
                  this.juego = resultado;
                }
              );
          }
        }
      );
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.juego);
    this.juego.tipo = 'videojuego';
    this.juego.total = this.juego.precio * this.juego.cantidad;

    if (this.id === 'nuevo') {
      // Guardar un juego nuevo
      this._pokemonService.nuevoJuego(this.juego)
        .subscribe(
          resultado => {
            console.log(resultado.name);
            this._router.navigate(['/juego', resultado.name]);
          },
          error => {
            console.log(error);
          }
        );
    } else {
      // Modificar al Pokemon
      this._pokemonService.editarJuego(this.juego, this.id)
        .subscribe(
          resultado => {
            this._router.navigate(['/pokedex']);
          },
          error => {
            console.log(error);
          }
        );
    }
  }

}
