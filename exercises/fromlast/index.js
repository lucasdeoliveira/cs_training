// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {


    // Initialize pointers and position ahead index n times from starting point
    let current = list.head;
    let ahead   = list.head;

    for (let index = 0; index < n; index++) {
        ahead = ahead.next;
    }

    while(ahead.next) {
        current = current.next;
        ahead = ahead.next;
    }

    return current;

}

module.exports = fromLast;
