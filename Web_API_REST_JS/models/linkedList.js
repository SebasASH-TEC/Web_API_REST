const { v4: uuidv4 } = require('uuid');

// Nodo individual de la lista enlazada
class Node {
    // value: valor almacenado en el nodo
    constructor(value) {
        this.id = Node.incrementId(); // id único del nodo
        this.value = value;           // valor del nodo
        this.next = null;             // referencia al siguiente nodo
    }
}

// Lista enlazada simple
class LinkedList {
    constructor() {
        this.head = null;     // head: primer nodo de la lista
        this.elements = [];   // elements: arreglo auxiliar para almacenar nodos
    }

    // Valor a agregar en la lista
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
        return newNode.id; // retorna el id del nodo agregado
    }

    // Retorna todos los elementos de la lista
    getAll() {
        return this.elements;
    }

    // id: identificador del nodo a eliminar
    deleteById(id) {
        if (id === null || id === undefined) {
            return false;
        }
        if (!this.head) return false;

        // Caso especial: eliminar el nodo head
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
