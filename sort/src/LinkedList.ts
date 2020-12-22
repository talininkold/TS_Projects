class Node {
  next: Node | null = null

  constructor(public data: number) {}
}

export class LinkedList {

  head: Node | null = null

  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return;
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }
    tail.next = node
  }

  get length(): number {

    if (!this.head) {
      return 0
    }

    let counter = 1;
    let tail = this.head;

    while (tail.next) {
      counter++;
      tail = tail.next
    }

    return counter
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('No items')
    }

    let counter = 0;
    let tail: Node | null = this.head;

    while (tail) {
      if (counter === index) {
        return tail;
      }
      counter++;
      tail = tail.next
    }

    throw new Error('Index out of bound');
    
  }

  compare(first: number, second: number): boolean {
    if (!this.head) {
      throw new Error('No items')
    }
    return this.at(first).data > this.at(second).data
  }

  swap(first: number, second: number): void {
    const max = this.at(first).data
    this.at(first).data = this.at(second).data
    this.at(second).data = max
  }

  print(): void {
    if (!this.head) {
      console.log('No items')
    }
    for (let i = 0; i < this.length; i++) {
      console.log(this.at(i).data)
    }
  }
}