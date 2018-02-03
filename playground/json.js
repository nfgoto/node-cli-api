// let obj = {
//   name : 'mungu'
// };
//
// let stringObj = JSON.stringify(obj); // will return a JSON string
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = `{
//   "name" : "mungu",
//  "age" : 24,
//  "city" : "Lumumbashi"
// }`;
//
// let person = JSON.parse(personString); // will return an object from JSON string
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
  title : 'My Great Title',
  body : 'This is the body of the note.'
};

// stringify the originalNote Object
let originalNoteString = JSON.stringify(originalNote);
// Write that string into a file
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

// parse the JSON  string to get back an object
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title );
