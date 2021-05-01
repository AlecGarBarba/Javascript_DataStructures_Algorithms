class Node {
    constructor(element) {
      this.element = element;
      this.next = undefined;
    }
  
    toString() {
      return `${this.key}`;
    }
  }
  
  module.exports=Node;