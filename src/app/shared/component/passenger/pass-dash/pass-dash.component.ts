import { Component, inject, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger';
import { PassengerService } from 'src/app/shared/service/passenger.service';

@Component({
  selector: 'app-pass-dash',
  templateUrl: './pass-dash.component.html',
  styleUrls: ['./pass-dash.component.scss'],
})
export class PassDashComponent implements OnInit {
  passArr!: Array<Ipassenger>;
  checkinCount!: number;
  constructor() {}
  private _passService = inject(PassengerService);

  ngOnInit(): void {
    this.passArr = this._passService.fetchallpassenger();
    this.getcheckinCount();
  }
  getcheckinCount() {
    this.checkinCount = this.passArr.filter((f) => f.checkedIn).length;
  }
}
