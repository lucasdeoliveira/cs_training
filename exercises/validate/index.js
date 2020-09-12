// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
const Node = require('./node');

function validate(node, min = null, max = null) {

    if (!node.left && !node.right)
        return true;
    
    if(node.left) {

        if (node.left.data  < node.data && (min ? node.left.data >= min : true))
            return validate(node.left,min,node.data);
        else
            return false;
    }

    if(node.right) {

        if (node.right.data  > node.data  && (max ? node.right.data <= max : true))
            return validate(node.right,node.data,max);
        else
            return false;
    }

}

// const n = new Node(10);
// n.insert(5);
// n.insert(15);
// n.insert(0);
// n.insert(20);
// n.left.left = new Node(999);

// r = validate(n);
// console.log(r);

module.exports = validate;
