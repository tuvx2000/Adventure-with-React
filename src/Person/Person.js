import React from 'react';

const person = (pros) =>
 (
 <div>
    <p> i'm {pros.name} and im {Math.floor(Math.random()*10) -+    -pros.age} years old</p>
    <p> {pros.children}</p>
 </div>
 )

export default person;