// module object to see architecture of the current module (js file)
//console.log(module);

// to access & modify the export object inside the module object
//module.exports.age = 35;

const fs = require('fs');

let fetchNotes = () => {
  // error handling if not such file or errors in file
  try {
    let noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString); // return array of note objects
  } catch (e) {
    return [];
  };
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes)); // add notes array² JSON to JSON file
};

let addNote = (title, body) => {
  let notes = fetchNotes(); // to store notes fetched
  let note = {
    title, // equiv to title : title in ES6
    body // equiv to body : body in ES6
  };

  // To avoid file be overwrite every time

  // creates a new array with all elements that pass the test
  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) { // check if duplicateNotes
    notes.push(note); // adds note object to the end of notes array
    saveNotes(notes);
    return note;
  };
};


let getAll = () => {
  return fetchNotes();
} ;

let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  let notefound = filteredNotes[0];
  return notefound;
};

let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  if (notes.length !== filteredNotes.length) {
    saveNotes(filteredNotes);
    return true;
  }else {
    return false;
  };
};

let logNote = (note) => {
  debugger;
  console.log(`------\nTitle: ${note.title}\nBody: ${note.body}`);
};

module.exports = {
  addNote,  // equiv to addNote : addNote in ES6
  getAll,
  getNote,
  removeNote,
  logNote
};
