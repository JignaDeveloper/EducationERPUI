import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSetService {
  data:any = {};
  constructor() {
    // do nothing.
   }

  set(key:string, value:any)
  {
    this.data[key] = value;
  }
  get(key:string)
  {
    return this.data[key];
  }
}
