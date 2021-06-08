//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
word.slice(6).toUpperCase()

//Experiment with other combinations (chains) of string methods.

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);
console.log('Launch\nCode');
console.log('Launch/nCode');
console.log('Launch', 'Code');
console.log('Launch\tCode');
console.log('Launch/tCode');