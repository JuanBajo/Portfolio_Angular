import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  public arrow: string = '►';
  public edicion: boolean = false;
  public txtAbout: string = '';
  public p: any = {};

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.observable$.subscribe((activo) => {
      this.edicion = activo;
    });

    this.data.actualizarDatos$.subscribe((actualizar) => {
      if (actualizar) {
        this.ngOnInit();
      }
    });

    this.data.getPersona().then((res) => {
      this.txtAbout = res.about;
    });
  }

  public toggleArrow() {
    if (this.arrow === '►') {
      this.arrow = '▼';
    } else {
      this.arrow = '►';
    }
  }
}
