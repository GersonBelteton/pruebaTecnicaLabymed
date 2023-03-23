import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service'
@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  constructor(private peliculaService: PeliculasService) { }

  peliculas:any = []
  pelicula:any
  ngOnInit(): void {
    this.buscar()
  }


  buscar(){
    var titulo =localStorage.getItem("titulo")
    var anio =localStorage.getItem("anio")

    this.peliculaService.getPeliculas(titulo, anio)
    .subscribe((res) => {
      console.log(res)
      this.peliculas[0] = res
      this.pelicula = this.peliculas[0]
      console.log(this.peliculas)
   
    }, (error) => {
      console.log("ha ocurrido un error")
    })

  }

}
