import { Injectable } from '@angular/core';
import * as personprotojs from 'protos/person.js';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  deserialize(data : Uint8Array) {
    return personprotojs.tutorial.Person.decode(data);
  }

  serialize(person : Person) {
    return personprotojs.tutorial.Person.encode(personprotojs.tutorial.Person.fromObject(person)).finish();
  }
  
}
