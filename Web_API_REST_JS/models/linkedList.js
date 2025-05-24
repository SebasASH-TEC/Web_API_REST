const { v4: uuidv4 } = require('uuid');

class Node {
    constructor(value) {
        this.id = Node.incrementId();
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.elements = [];
    }

    addAndReturnId(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.elements.push({ id: newNode.id, value: newNode.value });
        return newNode.id;
    }

    getAll() {
        return this.elements;
    }

    
    deleteById(id) {
        if (id === null || id === undefined) {
            return false;
        }
        if (!this.head) return false;

        // Special case: deleting the head node
        if (this.head.id === id) {
            this.elements = this.elements.filter(element => element.id !== id);
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.id !== id) {
            current = current.next;
        }
        if (current.next && current.next.id === id) {
            this.elements = this.elements.filter(element => element.id !== id);
            current.next = current.next.next;
            return true;
        }
        return false;
    }
}

module.exports = new LinkedList();
