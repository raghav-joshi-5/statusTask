import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  passengersArr: Array<Ipassenger> = [
    {
      id: '1',
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: '2',
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: '3',
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: '4',
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: '5',
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];
  constructor() {}
  fetchallpassenger(): Array<Ipassenger> {
    return this.passengersArr;
  }
  remove(passObj: Ipassenger) {
    let getIndex = this.passengersArr.findIndex((f) => f.id == passObj.id);
    this.passengersArr.splice(getIndex, 1);
  }
  onUpdate(passId: string, passName: string) {
    let getIndex = this.passengersArr.findIndex((f) => f.id === passId);
    this.passengersArr[getIndex].fullname = passName;
  }
}
