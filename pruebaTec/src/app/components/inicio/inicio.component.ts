import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  peliculas: any = []
  constructor(private peliculaService: PeliculasService,
    private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      tituloPelicula: [''],
      anioPelicula: ['']
    });

  }

  dataForm = this.fb.group({
    tituloPelicula: [''],
    anioPelicula: ['']
  });
  formData: FormGroup = new FormGroup({
    tituloPelicula: new FormControl(''),
    anioPelicula: new FormControl('')

  });


  ngOnInit(): void {

  }

  buscar() {

    const data = this.dataForm.value;

    console.log(this.dataForm.value)

    console.log("buscar")
    console.log(data.tituloPelicula)
    this.peliculaService.getPeliculas(data.tituloPelicula, data.anioPelicula)
      .subscribe((res) => {
        console.log(res)
        this.peliculas[0] = res

        console.log(this.peliculas)
        var titulo = res.Title
        var anio = res.Year
        localStorage.setItem("titulo",titulo)
        localStorage.setItem("anio",anio)
     
      }, (error) => {
        console.log("ha ocurrido un error")
      })

  }

}
