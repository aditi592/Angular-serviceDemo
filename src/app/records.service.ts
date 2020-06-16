import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(){}
  getData(){

    return [
      {
        name: 'Aditi',
        course: 'MCA'
      },
      {
        name: 'Melroy',
        course: 'MCA'
      },
      {
        name: 'Chirag',
        course: 'MCA'
      },
      {
        name: 'Jaya',
        course: 'MCA'
      },
      {
        name: 'Nisha',
        course: 'MCA'
      },
      
    ]
  
  }
}
