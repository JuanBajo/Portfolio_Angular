import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/services/modelos.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
})
export class ProyectosComponent implements OnInit {
  edicion: boolean = false;
  proyectos: Proyecto[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.observable$.subscribe((activo) => {
      this.edicion = activo;
    });

    this.data.getIdActivo().then((valor) => {
      this.data.getProyectos(valor).then((res) => {
        Object.assign(this.proyectos, res);
      });
    });
  }
}
