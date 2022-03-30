class ClassList {
  list = new Set();

  add(className) {
    this.list.add(className);
  }

  remove(className) {
    this.list.delete(className);
  }

  toggle(className) {
    if (this.list.has(className)) {
      this.list.delete(className);

    } else {
      this.list.add(className);
    }
  }

  contains(className) {
    return this.list.has(className);
  }
}


export default ClassList;
