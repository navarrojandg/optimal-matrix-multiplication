import { Matrix } from './';

describe('Matrix', () => {
  describe('constructor', () => {
    it('should create', () => {
      expect(new Matrix([1,1])).toBeTruthy();
    });
    it('should create with dimensions given', () => {
      const mat = new Matrix([1,1]);
      expect(mat.rows).toBe(1);
      expect(mat.cols).toBe(1);
    });
  });

  describe('getters', () => {
    describe('cost', () => {
      let matrix: Matrix;
      beforeEach(() => {
        matrix = new Matrix([1,1]);
      });
    });
  });

  describe('methods', () => {

  });
});