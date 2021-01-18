class LinkedList {
    head;
    size;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(elem) {
        let node = new Node(elem);
        if (!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }
    remove(elem) {
        let curr = this.head;
        let prev = null;
        while (curr) {
            if (curr.data == elem) {
                if (prev) {
                    prev.next = curr.next;
                } else {
                    this.head = curr.next;
                }
                this.size--;
                return curr.data;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1;
    }

    removeWithoutHead(node) {
        let nextNode = node.next;
        node.data = nextNode.data;
        node.next = nextNode.next;
    }

    isEmpty() {
        return !this.size;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    sizeOflist() {
        return this.size;
    }

    printList() {
        let curr = this.head;
        curr && console.log('---- List -----');
        while (curr) {
            console.log(curr);
            curr = curr.next;
        }
    }

    isPalindrome() {
        let arr = [];
        let curr = head;
        while (curr) {
            arr.push(curr.data);
            curr = curr.next;
        }
        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

class Node {
    data;
    next;
    constructor(elem, next = null) {
        this.data = elem;
        this.next = next;
    }
}

class CreateLS {
    constructor() {
        let ls = new LinkedList();
        ls.add(10);
        ls.add(20);
        ls.printList();
        console.log('List is empty: ' + ls.isEmpty());
        ls.clear();
        ls.printList();
        console.log('Size of list is ' + ls.sizeOflist());
    }
}

new CreateLS();
