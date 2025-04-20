import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss'],
})
export class RemoveComponent implements OnInit {
  constructor() {}
  private _matdialogref = inject(MatDialogRef);

  ngOnInit(): void {}

  onConfirm(flag: boolean) {
    this._matdialogref.close(flag);
  }
}
