import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any;
  @ContentChild('header') header!: TemplateRef<any>;
  @ContentChild('rows') rows!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
