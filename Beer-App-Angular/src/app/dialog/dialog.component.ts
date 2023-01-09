import { Component, Inject } from '@angular/core'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'


export interface DialogData {
  name: string;
  description: string;
}


@Component({
  templateUrl: 'dialog.component.html',
})
export class BeerDetailDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

}
