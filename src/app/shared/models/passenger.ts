export interface Ipassenger {
  id: string;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: Ichildren[] | null;
}

export interface Ichildren {
  name: string;
  age: number;
}
