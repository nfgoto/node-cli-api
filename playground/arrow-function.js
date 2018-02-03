var square = x => Math.pow(x, 2);
console.log(square(5));


let user = {
  name : 'mungu',
  sayKaribu : () => {
    // console.log(arguments); // arrow functions do not bind arguments keyword
    console.log(`Karibu ${this.name}`) // arrow functions do not bind this keyword
  },
  sayKaribuAlt () {
    console.log(arguments);
    console.log(`Karibu ${this.name}`) //shorthand for regular ES5 function};
  }
};

user.sayKaribu(1,2,3,4);
user.sayKaribuAlt(1,1,1,1,3,4);

// µONLY use arrow functions when no need to use "this" & "arguments" keywords
