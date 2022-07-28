import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/services/modelos.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
})
export class ExperienciaComponent implements OnInit {
  constructor(private data: DataService) {}

  edicion: boolean = false;
  experiencias: Experiencia[] = [];

  ngOnInit(): void {
    this.data.observable$.subscribe((activo) => {
      this.edicion = activo;
    });

    this.data.getIdActivo().then((valor) => {
      this.data.getExperiencias(valor).then((res) => {
        Object.assign(this.experiencias, res);
      });
    });
  }
}
