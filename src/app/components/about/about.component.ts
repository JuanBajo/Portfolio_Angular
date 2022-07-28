import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  edicion: boolean = false;
  txtAbout: string = '';
  p: any = {};

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.observable$.subscribe((activo) => {
      this.edicion = activo;
    });

    this.data.getPersona().then((res) => (this.txtAbout = res.about));
  }
}
