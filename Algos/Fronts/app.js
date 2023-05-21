// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

class SLLNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null
    }

    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }
}
var mySLL = new SLL();
mySLL.addFront(10)

console.log(mySLL)



// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

class SLLNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null
    }

    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    removeFront(){
        if (this.head == null){
            return this.head
        }
        var nodeRemoved = this.head;
        this.head = nodeRemoved.next;
        nodeRemoved.next = null;
        return this.head;
    }
}
var mySLL = new SLL();
mySLL.removeFront()

console.log(mySLL)




// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null


class SLLNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null
    }

    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }
}
var mySLL = new SLL();
mySLL.addFront(10)

console.log(mySLL)



// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

class SLLNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null
    }

    addFront(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    removeFront(){
        if (this.head == null){
            return this.head
        }
        var nodeRemoved = this.head;
        this.head = nodeRemoved.next;
        nodeRemoved.next = null;
        return this.head;
    }


    front(){
        if(this.head == null){
            return null;
        } else{
        return this.head.value
    }
    }
}
var mySLL = new SLL();
mySLL.removeFront()
mySLL.addFront(10)
mySLL.addFront(7)
mySLL.addFront(9)
console.log(mySLL)
console.log(mySLL.front())
