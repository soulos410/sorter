class Sorter {
  constructor() {
    this.newSorter = [];
    this.comparator = (left,right) => right - left;
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
    let currentToArray = this.newSorter.slice();
    return currentToArray;
  }

  sort(indices) {
    let bufferArray = [], finalArray = [];

    for (let index = 0; index < indices.length; index++) {
      bufferArray[index] = indices[index];
    }
    bufferArray.sort(this.comparator);

    return bufferArray;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;