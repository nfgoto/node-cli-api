let person = {
  name : 'mungu'
};

person.age = 27;

debugger; // breakpoint for debugging
//once in debug mode, type c => will exec prog until breakpoint then use repl

person.name = 'toto';

console.log(person.name);
 /*
 node debug filename  -> to run JS file in debug mode
  n : next   / c : continue  / repl : to access vars in state before current line in debugger
 REPL: read evaluate print loop
  inside repl: use conventional JS (not ES6 - as of node 6.54)
*/
