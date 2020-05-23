class Triangle {

  constructor(rowNumber) {
    this._rows = this.init(rowNumber);
  }
  get lastRow() {
    return this._rows[this._rows.length - 1];
  }
  get rows() {
    return this._rows;
  }

  // ==========================================

  fact(n) {
    return (n > 1) ? this.fact(n - 1) * n : 1;
  }
  createRow(row) {
    var result = [];
    for (let i = 0; i <= row; i++) {
      result.push(this.fact(row) / this.fact(i) / this.fact(row - i));
    }
    return result;
  }
  init(rowNumber) {
    var result = [];
    for (let i = 0; i < rowNumber; i++) {
      result.push(this.createRow(i));
    }
    return result;
  }
}

var t = new Triangle(10);
console.log(t.rows);