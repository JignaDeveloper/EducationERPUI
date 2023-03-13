import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/main/common/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogData } from 'src/app/model/confirmDialogData';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private dialog:MatDialog) { }
  confirmDialog(data: ConfirmDialogData): Observable<boolean>{
    return this.dialog.open(ConfirmDialogComponent,{
      data,
      width: '450px',
      disableClose: true,
    }).afterClosed();

  }

}
