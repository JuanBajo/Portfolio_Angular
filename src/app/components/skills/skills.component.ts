import { Component, OnInit, ViewChild } from '@angular/core';
import { Skills } from 'src/app/services/modelos.service';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {

@ViewChild("modalSkill") modalSk:any;

  public arrow:string = "►";
  public tituloModal: string ="";
  public captionBtnModal: string = "";
  public edicion: boolean = false;
  public skills: Skills[] = [];
  public editSk: Skills ={
    id: 0,
    skill: "",
    valor: 0,
    persona_id:-1
  }


  constructor(  private data: DataService,
                private modal:NgbModal
    ) {}

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

  public toggleArrow(){
    if(this.arrow === "►") { this.arrow="▼"; }
    else { this.arrow="►"}
  }

  public borrarSkill(sk: Skills){
    Swal.fire("","¿Desea borrar este item?","warning").then((res)=>{
      if(res.isConfirmed){
          
          this.data.borrarDatos("/borrar/skill/", sk.id).then((res) => {
            Swal.fire("","Item borrado exitosamente.", "success");
            this.skills = [];
            this.ngOnInit(); 
        })
      }
    })
  }

  public editarSkill(sk: Skills){
    this.tituloModal = "Editar Hard & Soft skills";
    this.captionBtnModal = "Guardar cambios";
    Object.assign(this.editSk, sk)
    this.modal.open(this.modalSk, {centered:true})

  }

  public nuevaSkill(){
    this.tituloModal = "Nueva Hard & Soft skill";
    this.captionBtnModal = "Guardar";
    this.editSk ={
      id: 0,
      skill: "",
      valor: 0,
      persona_id:-1
    }
    this.modal.open(this.modalSk, {centered:true});
    
  }

  public guardarSkill(){
    if(this.editSk.valor <= 100 && this.editSk.valor >= 1){
      
    
      this.data.getIdActivo().then((res)=> {
        this.editSk.persona_id=res
        let body = JSON.stringify(this.editSk)
        
        this.data.guardarDatos("/crear/skill", body).then((res)=>{
          Swal.fire("", "Guardado","success")
          this.ngOnInit()
          this.modal.dismissAll();
          this.editSk ={
            id: 0,
            skill: "",
            valor: 0,
            persona_id:-1
          }
        
        })
  
      })
    }else{
      Swal.fire("","Valor esta fuera de los limites, ingrese otro número", "error")
    }
      
  }
}
