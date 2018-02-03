// LOCAL
const fs = require('fs'); // fs module is loaded
const notes = require('./notes');  // user defined notes module is loaded

// THIRD PARTY
const _ = require('lodash');  // lodash module is loaded
const yargs = require('yargs');
const titleOption = {
  describe : "Title of note",
  demand : true, // will require title flag
  alias: 't' // shortcut to the flag --title
};

const bodyOption =  {
  describe : "Body of note",
  demand : true,
  alias: 'b'
};

const argv = yargs
      .command('add', 'Add a new note', {
        title : titleOption,
        body : bodyOption
      })
      .command('list', 'list all notes')
      .command('read', 'Read a note', {title: titleOption})
      .command('remove', 'Remove a note', {title: titleOption})
        .help() //runs useful info from yargs, adds --help flag that will show args
        .argv; // chaining syntax

// argv : argument vector, array containing args
// let command = process.argv[2];
let command = argv._[0];
//const
//console.log('Command: ', command);
//console.log('Process: ', process.argv);
//console.log('Yargs: ', argv);

switch (command) {
  case 'add':
    var noteAdded = notes.addNote(argv.title, argv.body);
    if (noteAdded) {
      console.log('Note Added:');
      notes.logNote(noteAdded);
    }else {
      console.log('Note title already in use. No note added.');
    }
    break;
  case 'list':
  let allNotes = notes.getAll();
  console.log(`Printing : ${allNotes.length} note(s).`);
  allNotes.forEach(note => {
    debugger;
    notes.logNote(note);
  }
  );
    break;
  case 'read':
    let noteRead = notes.getNote(argv.title);
    if (noteRead) {
      console.log(`Note found:`);
      notes.logNote(noteRead);
    }else {
      console.log('Note not found');
    }
    break;
  case 'remove':
    let noteRemoved = notes.removeNote(argv.title);;
    let message = noteRemoved ? 'Note Removed.' : 'Note not found.';
    console.log(message);
    break;
  default:
    console.log('Command not recognized');
};
