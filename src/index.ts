import { parenthesize } from './lib/parenthesize';

const results = parenthesize('ABC');
// console.log(results);

for (let res of results) {
  const parenRegex = /\((.+?)\)/;
  const regexResult = res.match(parenRegex);
  console.log(regexResult?.[1]);
}
// create the matrices for A, B, C
// parenthesize ABC to get all the possible multiplications
// for each combination do the multiplication and store it

