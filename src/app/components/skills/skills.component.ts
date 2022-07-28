import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/services/modelos.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  edicion: boolean = false;
  public skills: Skills[] = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.observable$.subscribe((activo) => {
      this.edicion = activo;
    });

    this.data.getIdActivo().then((valor) => {
      this.data.getSkills(valor).then((res) => {
        Object.assign(this.skills, res);
      });
    });
  }
}
