import { Matrix } from './';

describe('Matrix', () => {
  describe('constructor', () => {
    let mat: Matrix;
    beforeEach(() => {
      mat = new Matrix([1,1]);
    });
    it('should create', () => {
      expect(mat).toBeTruthy();
    });
    it('should create with dimensions given', () => {
      expect(mat.rows).toBe(1);
      expect(mat.cols).toBe(1);
    });
    it('should have 0 cost on creation', () => {
      expect(mat.cost).toBe(0);
    });
  });

  describe('getters', () => {
    describe('dimensions', () => {
      let matrix: Matrix;
      beforeEach(() => {
        matrix = new Matrix([1,1]);
      });
      it('should return correct dimensions', () => {
        expect(matrix.dimensions).toEqual([1,1]);
      });
    });
  });

  describe('methods', () => {

  });

  describe('static', () => {
    describe('multiply', () => {
      it('should throw error if multiplication is not allowed', () => {
        expect(() => {
          Matrix.multipy(new Matrix([1,1]), new Matrix([2,2]));
        }).toThrowError();
      });
      it('should return a new matrix', () => {
        const A = new Matrix([1,1]);
        const B = new Matrix([1,1]);
        const prod = Matrix.multipy(A, B);
        expect(prod).toBeInstanceOf(Matrix);
      });
      it('should return a new matrix with correct calculated cost', () => {
        let A = new Matrix([4,2]);
        let B = new Matrix([2,5]);
        let prod = Matrix.multipy(A, B);
        expect(prod.cost).toEqual(4*2*5);

        A.cost = 10;
        B.cost = 20;
        prod = Matrix.multipy(A, B);
        expect(prod.cost).toEqual(10+20+4*2*5);
      });
      it('should return a new matrix with correct dimensions', () => {
        const A = new Matrix([4,2]);
        const B = new Matrix([2,5]);
        const prod = Matrix.multipy(A, B);
        expect(prod.dimensions).toEqual([4,5]);
      });
    });
  });
});