// Display
// Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single JavaScript file for this assignment, it may be the same from the Fronts assignment. All examples are done in order, starting with a new instance of the SLL class.

// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

// class SLL {
//     // constructor, other methods, removed for brevity
//     display() {
//     	// neatly display nodes in my list
//     }
//  }
// copy
// Examples:

// SLL1 = new SLL()
// SLL1.addFront(76) => Node { data: 76, next: null }
// SLL1.addFront(2) => Node { data: 2, next: Node { data: 76, next: null } }
// SLL1.display() => "2, 76"
// SLL1.addFront(11.41) => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
// SLL1.display() => "11.41, 2, 76"



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


    display(){
        var listString = "";
        if(this.head == null){
            return listString;
        } 
        listString += this.head.value
        while(runner !=null){
            listString += ", " + runner.value
            runner = runner.next;
        } 
        return listString;
    }
}
var mySLL = new SLL(); //Starts an empty list
console.log(mySLL.display())
mySLL.addFront(10)
// mySLL.addFront(7)
// mySLL.addFront(9)
// console.log(mySLL.front())
