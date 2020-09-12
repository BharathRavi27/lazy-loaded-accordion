import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // title = 'lazy-modal';
  // modalRef: BsModalRef;
  // form: FormGroup;
  // constructor(private modalService: BsModalService, private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     name: new FormControl(''),
  //   });
  // }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  constructor(private api: ApiService) {}
  ngOnInit() {}
}
