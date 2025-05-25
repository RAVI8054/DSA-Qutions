//1. Traversal of linked list
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null
//     }
// }

// let head  = new Node(1);
// let FirstNode = new Node(2);
// let secondNode = new Node(3);

// // Connect nodes
// head.next = FirstNode;
// FirstNode.next=secondNode;
// TraverseLinkedList(head)
// function TraverseLinkedList(head){
//           let current = head;
//           while(current!=null){
//             console.log(current.data)
//             current = current.next;
//         }
// };

// 2.==seacrhing in node===
//  class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null
//     }
// }

// let head  = new Node(12);
// let FirstNode = new Node(14);
// let secondNode = new Node(15);

// // Connect nodes
// head.next = FirstNode;
// FirstNode.next=secondNode;

// function search(head,key){
//     let current=head;
//     while(current!=null){
//         if(current.data==key){
//            return true
//         }else{
//             current=current.next;
//     }
//     }
//     return false;
// }
//  console.log(search(head,16))

// 3. insert value in node
// 3.1.at tha head starting node
//   class Node{
//     constructor(data){
//         this.node=data;
//         this.next=null
//     }
// }

// let head = new Node(1)
// let fn= new Node(2)
// let sn= new Node(3)
// let tn= new Node(4)

// head.next=fn;
// fn.next =sn;
// sn.next = tn

// function insertnode(key){
//     let newNode = new Node(key);
//     newNode.next=head;
//     head=newNode
// }

// insertnode(0)
// function print(head){
//  let current=head;
//  while(current!=null){
//     console.log(current.node);
//     current=current.next;
//  }
// }
// print(head)

// ==3.2 insert specipic point==
// function insertSpecficPoint(prevNode,data){
//     let NewNode = new Node(data)
//     NewNode.next = prevNode.next
//     prevNode.next=NewNode;
// }
// insertSpecficPoint(sn,22)


// 3.3=insert end
// function insertend(data) {
//     let newnode = new Node(data);
//     let current = head;

//     // Traverse until the last node (current.next == null)
//     while (current.next != null) {
//         current = current.next;
//     }
//     // Now current is the last node, attach the new node
//     current.next = newnode;
// }

// 4.delecting=====
// 4.1= delecting at the beginging

// class Node {
//     constructor(data) {
//         this.node = data;
//         this.next = null
//     }
// }

// let head = new Node(1)
// let fn = new Node(2)
// let sn = new Node(3)
// let tn = new Node(4)

// head.next = fn;
// fn.next = sn;
// sn.next = tn;

// function delecte() {
        // if(head==null){
        //     console.log("head is null")
        //     return;
        // }

//     let temp = head;
//     head = head.next;
//     temp = null;
// }
// delecte()
// function print(head) {
//     let current = head;
//     while (current != null) {
//         console.log(current.node);
//         current = current.next;
//     }
// }
// print(head)

// ==============================
// 4.2 delect at end

class Node {
    constructor(data) {
        this.node = data;
        this.next = null
    }
}

let head = new Node(1)
let fn = new Node(2)
let sn = new Node(3)
let tn = new Node(4)

head.next = fn;
fn.next = sn;
sn.next = tn;

function delectEnd(){
    // chek  LL is empty 
    if(head==null){
        return;
    }
    // chek if only one node
    if(head.next==null){
        head=null;
        return;
    }
    let currentNode=head;
    // find 2nd last elemnt
    while(currentNode.next.next!=null){
        currentNode=currentNode.next
    }
    let endnode = currentNode.next;
    currentNode.next=null;
    endnode=null
}
delectEnd()

function print(head) {
    let current = head;
    while (current != null) {
        console.log(current.node);
        current = current.next;
    }
}
print(head)
