export interface MatrixDimensions {
  [0]: number;
  [1]: number;
};

export interface MatrixInterface {
  rows: number;
  cols: number;
};

export class Matrix implements MatrixInterface {
  rows: number;
  cols: number;
  constructor(dimensions: MatrixDimensions) {
    this.rows = dimensions[0];
    this.cols = dimensions[1];
  };

  static multipy(M: Matrix, N: Matrix) {
    if (M.cols !== N.rows) return;
    const result = new Matrix([M.rows, N.cols]);
    
    return result;
  };
};