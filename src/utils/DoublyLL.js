/* eslint-disable */
class Node {
    constructor(prev, data, next) {
        this.prev = prev
        this.data = data
        this.next = next
    }
}

export default class DoublyLL {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // Adding a Tail Node
    addTailNode(data) {
        this.length++;
        let newNode = new Node(this.tail, data, null)
        // If the list is empty, current tail node value would be null
        if (!this.tail)
            //mark the new node as the head node
            this.head = newNode
        //else the next value of current tail node will be the new node
        else
            this.tail.next = newNode
        //mark the new node as the tail node
        this.tail = newNode
        return `Added tail Node: ${data}`
    }

    // Removing the Tail Node
    removeTail() {
        if (!this.tail)
            return "Linked List: Empty"

        this.length--;
        let value = this.tail.data;
        // Make the prev of the tail node as the new tail node
        this.tail = this.tail.prev;
        /* If the new tail node is null, make it as the new head node. 
           Else, make the next of the tail node as null  */
        !this.tail ? this.head = null : this.tail.next = null
        // return the removed element
        return `removed Tail Node: ${value}`
    }


    // Adding a Head Node
    addHeadNode(data) {
        this.length++;
        let newNode = new Node(null, data, this.head)
        // If the list is empty, current head node value would be null
        if (!this.head)
            //mark the new node as the tail node
            this.tail = newNode
        //else the prev value of current head node will be the new node
        else
            this.head.prev = newNode
        //mark the new node as the head node
        this.head = newNode
        return `Added Head Node: ${data}`
    }

    // Removing the Head Node
    removeHead() {
        if (!this.head)
            return "Linked List is Empty"

        this.length--;
        let value = this.head.data
        // Make the next of the head node as the new head node
        this.head = this.head.next
        /* If the new head node is null, make it as the new tail node. 
         Else, make the prev of the head node as null  */
        !this.head ? this.tail = null : this.head.prev = null
        // return the removed element
        return `removed Head Node: ${value}`
    }

    // Traverse and display the entire LL
    display() {
        // Start from the head node
        let curr = this.head;
        // If no head node, list is empty
        if (!curr) {
            console.log('Linked List is Empty')
            return
        }
        // Traverse until no node exists
        while (curr) {
            process.stdout.write(`|${curr.prev?.data}|${curr.data}|${curr.next?.data}| ---> `)
            curr = curr.next
        }
        console.log()
    }

    // Adding at 'nth' position
    addToN(data, n) {
        if (n > this.length)
            return "Insert index out of bounds"

        if (n === 0)
            return this.addHeadNode(data);

        if (n === this.length)
            return this.addTailNode(data);

        this.length++;
        let currentNode = this.head;
        for (let i = 0; i < n; i++) {
            // Get the current node at 'n' position.
            currentNode = currentNode.next;
        }
        // Create new node
        const newNode = new Node(0, data, 0);
        // Mark the prev of the current node as previous Node
        const previousNode = currentNode.prev;

        // The prev of the new node becomes the previous node
        // The next of the new node becomes the current node
        newNode.prev = previousNode;
        newNode.next = currentNode;

        // The next of the previous node becomes the new node
        // The prev of the current node becomes the new node
        previousNode.next = newNode;
        currentNode.prev = newNode;

        return `Added Node at ${n} position: ${data}`
    }

    // Delete node at 'nth' position
    deleteN(n) {
        if (n >= this.length || n < 0)
            return "Insert index out of bounds"

        if (n === 0)
            return this.removeHead();

        if (n === this.length - 1)
            return this.removeTail();

        this.length--;
        let currentNode = this.head;
        for (let i = 0; i < n; i++) {
            // Get the current node at 'n' position.
            currentNode = currentNode.next;
        }

        // Mark the prev value of the current node as the previous node.
        // Mark the next value of the current node as the next node.
        let previousNode = currentNode.prev
        let nextNode = currentNode.next

        // The prev value of the next node is the previous node
        // The next value of the previous node is the next node
        nextNode.prev = previousNode
        previousNode.next = nextNode

        return `removed Element from ${n} position: ${currentNode.data}`
    }

    // Search for an element in the Doubly Linked List
    search(e) {
        // Start from the head node
        let curr = this.head
        let flag = 0
        // Traverse until no node exists
        while (curr) {
            if (curr.data == e) {
                // If node is found, come out of the loop
                flag = 1
                break
            }
            curr = curr.next
        }
        if (flag == 1)
            return (`\n${curr.data} is Present in the Linked List`);
        return `${e} does not exist.`
    }

    deleteLL() {
        if (!this.head) {
            console.log("Linked List is Empty")
            return
        }
        // Start from the head node
        let curr = this.head
        // Traverse until no node exists
        while (curr) {
            // Make the current node the head node until head node is null
            this.head = curr.next
            curr = curr.next
        }
    }

    reverse() {
        if (!this.head) {
            console.log("Linked List is Empty")
            return
        }

        let temp = null
        let current = this.head
        while (current) {
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev
        }
        if (temp)
            this.head = temp.prev
    }
    static temp=null;
    next(){
        if( this.temp == null ) {
            this.temp = this.head;
            return this.temp;
        }
        if( this.temp == this.tail){ return "EOF"}
        this.temp = this.temp.next
        return this.temp;
    }
    prev(){
        if( this.temp == null ) {
            this.temp = this.head;
            return this.temp;
        }
        if( this.temp == this.head){ return "EOF"}
        this.temp = this.temp.prev
        return this.temp;
    }
}