import { parenthesize } from './lib/parenthesize';
const parenRegex = /\((.+?)\)/;
const results = parenthesize('ABCDEF');
console.log(results);