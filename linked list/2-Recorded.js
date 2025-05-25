// doublly linked list addaing
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

let head;
function pushNode(data){
    let newNode = new Node(data);

    if(head==null){
        head=newNode;
        return;
    }
    newNode.next=head;
    head.prev=newNode
    head = newNode
}
pushNode(1)
pushNode(2)
pushNode(3)
function print(head) {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}
print(head)
