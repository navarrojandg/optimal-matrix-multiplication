
export function parenthesize(matrixString: string) {
  if (matrixString.length < 2) return [`(${matrixString})`];
  const open = '(';
  const close = ')';
  const results = [];
  // split the string up and add spaces where the parens could go
  const matrixFrag = matrixString
    .split('')
    .join(' ')
    .split('');
  matrixFrag.unshift(' ');
  matrixFrag.push(' ');

  // anchor with the open paren
  matrixFrag[0] = open;
  for(let i = 1; i < matrixFrag.length - 1; i ++) {
    if (matrixFrag[i] === ' ') {
      const copy = [...matrixFrag];
      copy[i] = close;
      results.push(copy.filter(char => char !== ' ').join('').trim());
    };
  };
  matrixFrag[0] = ' ';

  // anchor with the close paren
  matrixFrag[matrixFrag.length-1] = close;
  for (let i = matrixFrag.length-1; i > 1; i--) {
    if (matrixFrag[i] === ' ') {
      const copy = [...matrixFrag];
      copy[i] = open;
      results.push(copy.filter(char => char !== ' ').join('').trim());
    };
  };
  matrixFrag[matrixFrag.length-1] = ' ';

  return results;
};
