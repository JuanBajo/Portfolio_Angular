import { Component, OnInit, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/services/modelos.service';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
})
export class ProyectosComponent implements OnInit {

  @ViewChild("modalProy") modalPro: any;

  public arrow:string = "►";
  public tituloModal: string ="";
  public captionBtnModal: string = "";
  public edicion: boolean = false;
  public proyectos: Proyecto[] = [];
  public editPro: Proyecto = {
    id: 0,
    fecha: "",
    nombre: "",
    descripcion: "",
    persona_id: -1
  }

  constructor(  private data: DataService,
                private modal:NgbModal        
    ) {}

  ngOnInit(): void {
    this.data.observable$.subscribe((activo) => {
      this.edicion = activo;
    });

    this.data.getIdActivo().then((valor) => {
      this.data.getProyectos(valor).then((res) => {
        Object.assign(this.proyectos, res);
        this.ordenarArray();
      });
    });
  }

  public toggleArrow(){
    if(this.arrow === "►") { this.arrow="▼"; }
    else { this.arrow="►"}
  }

  public ordenarArray(){
    this.proyectos.sort(function (a, b) {
      // A va primero que B
      let fechaA = new Date(a.fecha);
      let fechaB = new Date(b.fecha);
      if (fechaA < fechaB)
          return -1;
      // B va primero que A
      else if (fechaA > fechaB)
          return 1;
      // A y B son iguales
      else 
          return 0;
    });
  }


  public borrarProyecto(pro: Proyecto){
    Swal.fire("","¿Desea borrar este item?","warning").then((res)=>{
      if(res.isConfirmed){
          
          this.data.borrarDatos("/borrar/proyecto/", pro.id).then((res) => {
            Swal.fire("","Item borrado exitosamente.", "success");
            this.proyectos = [];
            this.ngOnInit(); 
        })
      }
    })
  }

  public editarProyecto(pro: Proyecto){
    this.tituloModal = "Editar proyecto";
    this.captionBtnModal = "Guardar cambios";
    Object.assign(this.editPro, pro)
    this.modal.open(this.modalPro, {centered:true})

  }

  public nuevaEducacion(){
    this.tituloModal = "Nueva proyecto";
    this.captionBtnModal = "Guardar";
    this.editPro = {
      id: 0,
      fecha: "",
      nombre: "",
      descripcion: "",
      persona_id: -1
    }
    this.modal.open(this.modalPro, {centered:true});
    
  }

  public guardarProyecto(){
    this.data.getIdActivo().then((res)=> {
      this.editPro.persona_id=res
      let body = JSON.stringify(this.editPro)
      
      this.data.guardarDatos("/crear/proyecto", body).then((res)=>{
        Swal.fire("", "Guardado","success")
        this.ngOnInit()
        this.modal.dismissAll();
        this.editPro = {
          id: 0,
          fecha: "",
          nombre: "",
          descripcion: "",
          persona_id: -1
        }
      
      })

    })
  }

}
