export interface MatrixHash {
  [key: string]: Matrix;
};

export interface MatrixDimensions {
  [0]: number;
  [1]: number;
};

export interface MatrixInterface {
  rows: number;
  cols: number;
  cost: number;
};

export class MatrixMultError extends Error {
  constructor() {
    super('Matrix multiplication forbidden.');
    this.name = 'MatrixMultError';
  };
};

export class Matrix implements MatrixInterface {
  rows: number;
  cols: number;
  cost: number;

  constructor(dimensions: MatrixDimensions) {
    this.rows = dimensions[0];
    this.cols = dimensions[1];
    this.cost = 0;
  };

  get dimensions(): MatrixDimensions {
    return [this.rows, this.cols];
  };

  print(): void {
    console.log(`${this.rows}\t${this.cols}\t${this.cost}`)
  };

  static multipy(A: Matrix, B: Matrix) {
    if (A.cols !== B.rows) throw new MatrixMultError();
    const result = new Matrix([A.rows, B.cols]);
    result.cost = A.cost + B.cost + (A.rows * A.cols * B.cols);
    return result;
  };
};