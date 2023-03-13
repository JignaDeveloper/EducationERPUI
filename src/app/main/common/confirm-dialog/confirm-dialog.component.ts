import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from 'src/app/model/confirmDialogData';
import { ConfirmMessage } from 'src/app/model/confirmMessage';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  confirmData!:ConfirmMessage;

  constructor(@Inject(MAT_DIALOG_DATA) public data:ConfirmDialogData) { }

  ngOnInit(): void {
    this.confirmData=<ConfirmMessage>this.data.message;
  }

}
