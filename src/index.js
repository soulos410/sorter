class Sorter {
    constructor() {
    this.newSorter = [];
    this.comparator = (left,right) => left-right;
  }

  add(element) {
    this.newSorter.push(element);
  }

  at(index) {
    return this.newSorter[index];
  }

  get length() {
    return this.newSorter.length;
  }

  toArray() {
    return this.newSorter;
  }

  sort(indices) {
    let bufferArray = [];

    bufferArray = indices.sort().map((index) => this.newSorter[index]);
    bufferArray.sort(this.comparator);

    for(let index = 0; index < indices.length; index++){
      this.newSorter[indices[index]] = bufferArray[index];
      }
    return this.newSorter;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}
module.exports = Sorter;
