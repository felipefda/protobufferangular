# Protocolbufferangular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

Using rxjs to get some bin file and read it only with angular.

# How to start

Install protobufjs
```
npm install protobufjs --save
```
Create or use an example of your proto file. 
This sample is of [Java Tutorial](https://developers.google.com/protocol-buffers/docs/javatutorial)
```
syntax = "proto2";

package tutorial;

option java_package = "com.example.tutorial";
option java_outer_classname = "Person";

message Person {
  required string name = 1;
  required int32 id = 2;
  required string email = 3;
}

```
Convert your protocol buffer to addressbook.js file
```
node_modules/protobufjs/cli/bin/pbjs -t static-module -w commonjs -o protos/person.js protos/person.proto
```

If you have permission denied just give a chmod to protobuffjs files. This will need some further investigation but for now you won't need to do it into angular project.
```
chmod -R 777 node_modules/protobufjs
```
Create a service to get, serialize and deserialize messages.
```
ng g service person
```
Import you js protocol buffer file
```
import * as personprotojs from 'protos/person.js';
```
Create a model class to encapsule the object.
```
ng g class person
```
Simple object
```
export class Person {
    private id : number;
    private name : string;
    private email : string;

    public constructor(id : number, name : string, email : string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

```

Check app.component.ts



## Reference guide

You can check more at [Protocol Buffers](https://developers.google.com/protocol-buffers).

