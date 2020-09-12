// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, node=null ) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) { 
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let pivot = this.head;

        while (pivot) {
            count++;
            pivot = pivot.next;
        }

        return count;
    }

    getFirst() { 
        return this.head;
    }

    getLast() { 
        
        let pivot = this.head;
        if(!pivot){
            return pivot;
        }

        while(pivot.next) {
            pivot = pivot.next;
        }
        return pivot;

    }

    clear() { 
        this.head = null;
    }


    removeFirst() { 
        if(this.head)
            this.head = this.head.next;
    }

    removeLast() {

        //size 0
        if(!this.head)
            return;
        
        //size 1
        if(!this.head.next){
            this.head = null;
            return;
        }

        //size > 1
        let pivot = this.head;
        let previ = this.head;

        if(pivot){

            while(pivot.next){
                previ = pivot;
                pivot = pivot.next;
            }
            previ.next = null;
        }
    }

    insertLast(data) {
        
        if(!this.head) {
            this.insertFirst(data);
            return;
        }

        let node = this.getLast();
        node.next = new Node(data,null);
    }

    getAt(index) {
        let node = this.head;
        let i = 0;

        while(node) {

            if(i === index)
                return node;

            node = node.next;
            i++;
        }
        return null;
    }

    removeAt(index) {

        if(!this.head)
            return;

        if(index === 0) {
            this.head = this.head.next;
            return;
        }
        
        //get the previous 
        let node = this.getAt(index-1);
        let tobeRemoved = node.next;
        if(tobeRemoved) {
            node.next = tobeRemoved.next;
        }
    }

    insertAt(data, index) {

        if(!this.head && index >=0 ){
            this.insertFirst(data);
            return;
        }

        if(index == 0) { 
            this.head = new Node(data, this.head);
            return;
        }

        let prevNode = this.getAt(index-1);
        if(prevNode) { 
            let swp = prevNode.next;
            let newNode = new Node(data);
            prevNode.next = newNode;
            newNode.next = swp;
        } else {
            this.insertLast(data);
        }
    }

    forEach(func) {
        let node = this.head;
     
        while (node) {
          func.call(this, node);
          node = node.next;
        }
    }
}

l = new LinkedList();
l.size();
console.log("As");
l.insertFirst('a');
// l.insertFirst('b');
l.removeLast();
console.log(l.size());


module.exports = { Node, LinkedList };
