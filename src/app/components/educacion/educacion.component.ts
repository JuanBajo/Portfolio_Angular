import { Component, OnInit, ViewChild } from '@angular/core';
import { Educacion } from 'src/app/services/modelos.service';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { NgbAccordion, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  
})
export class EducacionComponent implements OnInit {

  @ViewChild("modalEdu") modalEdu: any;

  public arrow:string = "►";
  public tituloModal: string ="";
  public captionBtnModal: string = "";
  public edicion:boolean = false;
  public educacion: Educacion[]=[];
  public editEdu: Educacion = {
    id: 0,
    institucion: "",
    carrera: "",
    fechaEgreso: "",
    descripcion: "",
    persona_id: -1
  }

  constructor(  private data:DataService,
                private modal:NgbModal
    ) { }

  ngOnInit(): void {
    this.data.observable$.subscribe (activo => { this.edicion=activo; });
    
    this.data.getIdActivo().then(valor => {
      this.data.getEducacion(valor).then( res => {
        Object.assign(this.educacion, res);
        this.ordenarArray();
        

      })
    });
    
  }


  public ordenarArray(){
    this.educacion.sort(function (a, b) {
      // A va primero que B
      let fechaA = new Date(a.fechaEgreso);
      let fechaB = new Date(b.fechaEgreso);
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



  public editarEducacion(edu: Educacion){
    this.tituloModal = "Editar experiencia académica";
    this.captionBtnModal = "Guardar cambios";
    Object.assign(this.editEdu, edu)
    this.modal.open(this.modalEdu, {centered:true})

  }

  public nuevaEducacion(){
    this.tituloModal = "Nueva experiencia académica";
    this.captionBtnModal = "Guardar";
    this.editEdu= {
      id: 0,
      institucion: "",
      carrera: "",
      fechaEgreso: "",
      descripcion: "",
      persona_id: -1
    }
    this.modal.open(this.modalEdu, {centered:true});
    
  }

  public guardarEducacion(){
    this.data.getIdActivo().then((res)=> {
      this.editEdu.persona_id=res
      let body = JSON.stringify(this.editEdu)
      
      this.data.guardarDatos("/crear/educacion", body).then((res)=>{
        Swal.fire("", "Guardado","success")
        this.ngOnInit()
        this.modal.dismissAll();
        this.editEdu= {
          id: 0,
          institucion: "",
          carrera: "",
          fechaEgreso: "",
          descripcion: "",
          persona_id: -1
        }
      
      })

    })
  }

  public borrarEducacion(edu: Educacion){
    Swal.fire("","¿Desea borrar este item?","warning").then((res)=>{
      if(res.isConfirmed){
          
          this.data.borrarDatos("/borrar/educacion/", edu.id).then((res) => {
            Swal.fire("","Item borrado exitosamente.", "success");
            this.educacion = [];
            this.ngOnInit(); 
        })
      }
    })
  }

}


