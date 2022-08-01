import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public txtLogBtn: string;
  public lblUser: any;
  public txtEmail: string = '';
  public txtPass: string = '';

  @ViewChild('modalLogin') modalLogin: any;

  constructor(private modal: NgbModal, private data: DataService) {
    if (sessionStorage.getItem('currentUser') == null) {
      this.txtLogBtn = 'Login';
      this.lblUser = '';
    } else {
      this.lblUser = sessionStorage.getItem('currentUser');
      this.txtLogBtn = 'Logout';
    }
  }

  ngOnInit(): void {
    this.data.txtBtnLogEmitter.subscribe((res) => (this.txtLogBtn = res));
    this.data.lblUsrEmitter.subscribe((res) => (this.lblUser = res));
  }

  public login() {
    var emailReg =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailReg.test(this.txtEmail)) {
      this.data.loginUsuario(this.txtEmail, this.txtPass);
      this.modal.dismissAll();
    } else {
      Swal.fire(
        '',
        'Ingrese una dirección de correo electrónico válida',
        'error'
      );
    }
  }

  public showModal() {
    if (sessionStorage.getItem('currentUser') == null) {
      this.modal.open(this.modalLogin, { centered: true });
    } else {
      this.data.logout();
      this.txtLogBtn = 'Login';
      this.lblUser = '';
    }
  }

  public validarEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
      alert('La dirección de email ' + email + ' es correcta.');
    } else {
      Swal.fire(
        '',
        'Ingrese una dirección de correo electrónico válida',
        'error'
      );
    }
  }
}
