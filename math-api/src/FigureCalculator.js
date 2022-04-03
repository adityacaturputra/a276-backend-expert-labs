class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateArgs(args, length) {
    if (args.length !== length) {
      throw new Error(`fungsi hanya menerima ${length} parameter`);
    }
    args.forEach((number) => {
      if (typeof number !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    });

    return args;
  }

  calculateRectanglePerimeter(...args) {
    this._validateArgs(args, 2);
    // formula: (2 * (length + width))
    const [length, width] = args;
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea() { }

  calculateTrianglePerimeter() { }

  calculateTriangleArea() { }
}

module.exports = FigureCalculator;
