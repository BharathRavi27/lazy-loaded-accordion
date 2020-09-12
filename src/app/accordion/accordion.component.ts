import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { AccordionDirective } from './accordion.directive';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  isOpen: boolean = false;
  @ContentChild(AccordionDirective, { read: TemplateRef })
  accordionBodyRef: TemplateRef<unknown>;
  constructor() {}
  ngOnInit(): void {}
}
