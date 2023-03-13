import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-image-cell-renderer',
  template: '<img  width="50px" height="50px" [src]="params.value">',
  styleUrls: ['./image-cell-renderer.component.scss']
})
export class ImageCellRenderer implements AgRendererComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }
}
