import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBarRef, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    snackBarConfig!: MatSnackBarConfig;
    snackBarRef!: MatSnackBarRef<any>;
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    snackBarAutoHide = '10000';

    constructor(private snackBar: MatSnackBar) { }

    showNotification(message: string) {
        this.snackBarConfig = new MatSnackBarConfig();
        this.snackBarConfig.horizontalPosition = this.horizontalPosition;
        this.snackBarConfig.verticalPosition = this.verticalPosition;
        this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
        this.snackBarConfig.panelClass = 'black';
        this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
    }

    showErrorNotification() {
        this.showNotification("Something went wrong. Please try again !");
    }
}