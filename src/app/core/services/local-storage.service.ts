import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { 
    // do nothing.
  }

  public set(key: string, value: string){
    localStorage.setItem(key, value);
  }

  public get(key: string){    
    return localStorage.getItem(key);
  }  
  
  public delete(key: string){
    localStorage.removeItem(key);   
  }
}
