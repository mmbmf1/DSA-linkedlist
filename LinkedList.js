// Create a linked list class
// Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(nextNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let prevNode = this.head;

      while (currNode !== null && currNode.value !== nextNode) {
        prevNode = currNode;
        currNode = currNode.next;
      }

      prevNode.next = new _Node(item, currNode);
    }
  }

  insertAfter(pNode, item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let prevNode = this.head;

      while (currNode !== null && currNode.value !== pNode) {
        prevNode = currNode;
        currNode = currNode.next;
      }

      prevNode = currNode;
      currNode = currNode.next;
      prevNode.next = new _Node(item, currNode);
    }
  }

  insertAt(index, item) {
    if (this.head === null) {
      this.insertFirst(item);
    }

    let currNode = this.head;
    let prevNode = this.head;
    let i = 0;

    while (i !== index) {
      if (!currNode.next) {
        return;
      }

      prevNode = currNode;
      currNode = currNode.next;
      i++;
    }

    if (currNode === null) {
      return;
    }

    let pushedItem = prevNode;
    let newItem = new _Node(item, prevNode.next);
    pushedItem.next = newItem;
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log("Item not found");
      return;
    }

    previousNode.next = currNode.next;
  }
}

function main() {
  const SLL = new LinkedList();
  // isEmpty(SLL);
  SLL.insertFirst("Apollo");
  SLL.insertFirst("Boomer");
  SLL.insertFirst("Helo");
  SLL.insertFirst("Husker");
  SLL.insertFirst("Starbuck");
  SLL.insertFirst("Tauhida");
  SLL.remove("Husker");
  SLL.remove("Tauhida");
  SLL.insertBefore("Boomer", "Michael");
  SLL.insertAfter("Boomer", "Mace");
  SLL.insertAt(0, "Kobe");
  display(SLL);
  // isEmpty(SLL);
  size(SLL);
  findPrevious(SLL, "Boomer");
  findLast(SLL);
}

main();

//Supplemental functions

function display(list) {
  let dis = [];
  let current = list.head;
  while (current !== null) {
    dis = [...dis, current.value];
    current = current.next;
  }

  console.log(dis);
}

function size(list) {
  let number = 0;
  let current = list.head;
  while (current !== null) {
    number++;
    current = current.next;
  }
  console.log("The size of the list: " + number);
}

function isEmpty(list) {
  if (!list.head) {
    console.log("This list is empty");
    return;
  }
  display(list);
}

function findPrevious(list, item) {
  let current = list.head;
  let prev = list.head;

  while (current !== null) {
    if (current.value === item) {
      console.log(`The item previous to ${item} is: ` + prev.value);
    }

    prev = current;
    current = current.next;
  }
}

function findLast(list) {
  let current = list.head;

  while (current !== null) {
    if (current.next === null) {
      console.log("The last item value is: " + current.value);
      return;
    }
    current = current.next;
  }
}
