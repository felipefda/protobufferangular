import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})
export class AppComponent implements OnInit {
  title = 'protocolbufferangular';

  constructor(private personService : PersonService){

  }

  ngOnInit(): void {
    //create object
    const person = new Person(1,'john crusue','john@email.com');

    //serialize object
    const serialized = this.personService.serialize(person);

    //serialized object
    console.log('serialized',serialized);

    //deserialized
    console.log('deserialized',this.personService.deserialize(serialized));
  }
}
