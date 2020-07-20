class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }
  max() {
    if (this.items[0]) {
      return this.items.reduce((accumulator, item) => {
        return Math.max(accumulator, item);
      });
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.items[0]) {
      return this.items.reduce((accumulator, item) => {
        return Math.min(accumulator, item);
      });
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {}
  avg() {}
}

module.exports = SortedList;
