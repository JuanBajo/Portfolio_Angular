import { Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/services/modelos.service';
import { DataService } from 'src/app/services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  
  @ViewChild('modalInfo') modalInfo: any;

// Propiedades para mostrar datos en html
  public edicion = false;
  public nombre: string = '';
  public apellido: string = '';
  public titulo: string = '';
  public email:string = '';
  public about:string = '';
  
// Objeto persona para tranferir al servicio de datos.
  public p: Persona = {
    id: 0,
    nombre: '',
    apellido: '',
    domicilio: '',
    email: '',
    url_foto: '',
    titulo: '',
    about: '',
    activo: true,
  };
  public idActivo: number = 0;

  constructor(  private data: DataService,
                private modal:NgbModal
    
    ) {}

  ngOnInit(): void {
    this.data.observable$.subscribe((activo) => {
      this.edicion = activo;
    });

    this.data.getPersona().then((res) => {
      Object.assign(this.p, res);
      this.titulo = this.p.titulo;
      this.nombre = this.p.nombre;
      this.apellido = this.p.apellido;
      this.email=this.p.email;
    });
  }

  public editarInfo(){
    this.modal.open(this.modalInfo,{centered:true});
  }

  public guardarInfo(){
    let body = JSON.stringify(this.p);
    this.data.guardarDatos('/crear/persona', body).then((res)=>{
      Swal.fire("", "Guardado","success")
      this.ngOnInit()
      this.modal.dismissAll();
    })

  }


}
