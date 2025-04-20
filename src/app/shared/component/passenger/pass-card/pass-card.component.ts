import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ipassenger } from 'src/app/shared/models/passenger';
import { PassengerService } from 'src/app/shared/service/passenger.service';
import { RemoveComponent } from '../remove/remove.component';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss'],
})
export class PassCardComponent implements OnInit {
  @Input() passObj!: Ipassenger;
  isinEditMode: boolean = false;
  @Output() sendCount: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}
  private _passService = inject(PassengerService);
  private _matdialog = inject(MatDialog);

  ngOnInit(): void {}

  onUpdate(passName: string) {
    if (this.isinEditMode) {
      this._passService.onUpdate(this.passObj.id, passName);
    }
    this.isinEditMode = !this.isinEditMode;
  }

  onDelete() {
    let matdialogref = this._matdialog.open(RemoveComponent);
    matdialogref.afterClosed().subscribe((s) => {
      if (s) {
        this._passService.remove(this.passObj);
        this.sendCount.emit(true);
      }
    });
  }
}
