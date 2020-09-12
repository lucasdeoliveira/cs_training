// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node')

function levelWidth(root) {

    wArray = [0];
    buffer = [root,'@@#@@'];

    while (buffer.length > 1){

        let node = buffer.shift();
        wArray[wArray.length-1]++;
        
        if(node.children && node.children.length>0)
            buffer.push(...node.children);

        if(buffer[0] === '@@#@@' && buffer.length > 1) {
            buffer.push(buffer.shift());
            wArray.push(0);
        }
    }

    return wArray;

}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
levelWidth(root)

module.exports = levelWidth;
