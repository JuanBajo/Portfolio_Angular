import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  txtLogBtn: string;
  constructor(public modal: NgbModal, private data: DataService) {
    this.txtLogBtn = 'Login';
  }

  ngOnInit(): void {}
  public async login() {
    this.data.loginUsuario();
    this.txtLogBtn = 'Logout';
    this.modal.dismissAll();
    
  }
}
