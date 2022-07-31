import { Component, OnInit, ViewChild } from '@angular/core';
import { Experiencia } from 'src/app/services/modelos.service';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
})
export class ExperienciaComponent implements OnInit {
  constructor(  private data: DataService,
                private modal:NgbModal,
                
    
    ) {}
  
  @ViewChild("modalExp") modalExp:any;
  public arrow:string = "►";
  public tituloModal: string ="";
  public captionBtnModal: string = "";
  public edicion: boolean = false;
  public experiencias: Experiencia[] = [];
  public editExp: Experiencia = {
    id: 0,
    empresa: "",
    puesto: "",
    fechaInicio: "",
    fechaFin: "",
    ciudad: "",
    persona_id: -1,
  }

  ngOnInit(): void {
    this.data.observable$.subscribe((activo) => {
      this.edicion = activo;
    });

    this.data.getIdActivo().then((valor) => {
      this.data.getExperiencias(valor).then((res) => {
        Object.assign(this.experiencias, res);
        this.ordenarArray();
      });
    });
  }

  public ordenarArray(){
    this.experiencias.sort(function (a, b) {
      // A va primero que B
      let fechaA = new Date(a.fechaInicio);
      let fechaB = new Date(b.fechaInicio);
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
  
  public toggleArrow(){
    if(this.arrow === "►") { this.arrow="▼"; }
    else { this.arrow="►"}
  }

  public editarExperiencia(exp: Experiencia){
    this.tituloModal = "Editar experiencia laboral";
    this.captionBtnModal = "Guardar cambios";
    Object.assign(this.editExp, exp)
    this.modal.open(this.modalExp, {centered:true});

  }

  public nuevaExperiencia(){
    this.tituloModal = "Nueva experiencia laboral";
    this.captionBtnModal = "Guardar";
    this.editExp  = {
      id: 0,
      empresa: "",
      puesto: "",
      fechaInicio: "",
      fechaFin: "",
      ciudad: "",
      persona_id: -1,
    }
    this.modal.open(this.modalExp, {centered:true});
    
  }
  
  public borrarExperiencia(exp: Experiencia){
    Swal.fire("","¿Desea borrar este item?","warning").then((res)=>{
      if(res.isConfirmed){
          
          this.data.borrarDatos("/borrar/experiencias/", exp.id).then((res) => {
            Swal.fire("","Item borrado exitosamente.", "success");
            this.experiencias = [];
            this.ngOnInit(); 
        })
      }
    })
  }

  public guardarExperiencia(){
    this.data.getIdActivo().then((res)=> {
      this.editExp.persona_id=res
      let body = JSON.stringify(this.editExp)
      
      this.data.guardarDatos("/crear/experiencia", body).then((res)=>{
        Swal.fire("", "Guardado","success")
        this.ngOnInit()
        this.modal.dismissAll();
        this.editExp  = {
          id: 0,
          empresa: "",
          puesto: "",
          fechaInicio: "",
          fechaFin: "",
          ciudad: "",
          persona_id: -1,
        }
      
      })

    })
  }
}
