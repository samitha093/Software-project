const crons = require('../../models/cron');
const events = require('../../models/events');
const tickets = require('../../models/tickets');
const orders = require('../../models/orders');
const qr = require('../../models/qr');
const User = require('../../models/users');
const Bids = require('../../models/bid');

const moment = require('moment'); // require
moment().format();

// Create Node of LinkedList
function Node(data, footer) {
    this.node = data;
    this.footerdata = footer;
    this.next = null;
}

// To initialize a linkedlist
function LinkedList(list) {
this.head = list || null
}

// Function to insert The new Node into the linkedList
LinkedList.prototype.insert = function(data,footer) {
    // Check if the linked list is empty
    // so insert first node and lead head
    // points to generic node
    if (this.head === null)
        this.head = new Node(data,footer);

    else {

        // If linked list is not empty, insert the node
        // at the end of the linked list
        let list = this.head;
        while (list.next) {
            list = list.next;
        }

        // Now here list pointer points to last
        // node let’s insert out new node in it
        list.next = new Node(data,footer)
    }
}

// Function to mergesort a linked list
LinkedList.prototype.mergeSort = function(list) {

    if (list.next === null)
        return list;

    let count = 0;
    let countList = list
    let leftPart = list;
    let leftPointer = list;
    let rightPart = null;
    let rightPointer = null;

    // Counting the nodes in the received linkedlist
    while (countList.next !== null) {
        count++;
        countList = countList.next;
    }

    // counting the mid of the linked list
    let mid = Math.floor(count / 2)
    let count2 = 0;

    // separating the left and right part with
    // respect to mid node in the linked list
    while (count2 < mid) {
        count2++;
        leftPointer = leftPointer.next;
    }

    rightPart = new LinkedList(leftPointer.next);
    leftPointer.next = null;

    // Here are two linked list which
    // contains the left most nodes and right
    // most nodes of the mid node
    return this._mergeSort(this.mergeSort(leftPart),
                            this.mergeSort(rightPart.head))
}

// Merging both lists in a sorted manner
LinkedList.prototype._mergeSort = function(left, right) {

    // Create a new empty linked list
    let result = new LinkedList()

    let resultPointer = result.head;
    let pointerLeft = left;
    let pointerRight = right;

    // If true then add left most node value in result,
    // increment left pointer else do the same in
    // right linked list.
    // This loop will be executed until pointer's of
    // a left node or right node reached null
    while (pointerLeft && pointerRight) {
        let tempNode = null;
        let tempFooter = null;

        // Check if the right node's value is greater than
        // left node's value
        if (pointerLeft.node < pointerRight.node) {
            tempNode = pointerRight.node
            tempFooter = pointerRight.footerdata
            pointerRight = pointerRight.next;
        }
        else {
            tempNode = pointerLeft.node
            tempFooter = pointerLeft.footerdata
            pointerLeft = pointerLeft.next;
        }

        if (result.head == null) {
            result.head = new Node(tempNode,tempFooter)
            resultPointer = result.head
        }
        else {
            resultPointer.next = new Node(tempNode,tempFooter)
            resultPointer = resultPointer.next
        }
    }

    // Add the remaining elements in the last of resultant
    // linked list
    resultPointer.next = pointerLeft;
    while (resultPointer.next)
        resultPointer = resultPointer.next

        resultPointer.next = pointerRight

    // Result is the new sorted linked list
    return result.head;
}

// Function to print linkedList
LinkedList.prototype.iterate = function() {
 
    // First we will check whether out
    // linked list is empty or node
    if (this.head === null)
        return null;

    // If linked list is not empty we will
    // iterate from each Node and prints
    // it’s value store in “data” property

    let list = this.head;

    // we will iterate until our list variable
    // contains the “Next” value of the last Node
    // i.e-> null
    while (list) {
        console.log(list.node,list.footerdata)
        list = list.next
    }
    console.log(' ------------------------------------------ ')
}

LinkedList.prototype.array = function(sizeofarray) {
    let selectedbidarray = [];
    var tempsize = 0;
    if (this.head === null)
        return null;
    let list = this.head;
    while (list && tempsize < sizeofarray) {
        selectedbidarray[tempsize] = list.footerdata;
        list = list.next
        tempsize++;
    }
    return selectedbidarray
}


function bidvalidator (ticketid){
    let tempTicket = "639bbe60fc7680003f019b8a";
    tickets.findById(tempTicket).then(async(data) =>{
    let l = new LinkedList();
        if(data.bids.length>0){
            let amoutarray = [];
            let bididarray = data.bids;
            for(i=0;i<data.bids.length;i++){
                amoutarray[i] =await Bids.findById(bididarray[i]).then(result=>{return result.bid_amount}).catch(err => console.log(err))
            }
            for(i=0;i<data.bids.length;i++){
                // console.log(bididarray[i],amoutarray[i]);
                l.insert(amoutarray[i],bididarray[i])
            }
            // Sort the linked list
            l.head = LinkedList.prototype.mergeSort(l.head)
            // // Print the sorted linked list
            //l.iterate()
            //select winner list
            var bidQTY = data.bid_quantity;
            let selectedbidarray = l.array(bidQTY);
            for(i=0;i<bidQTY;i++){
                console.log(selectedbidarray[i]);
            }
            data.bids = selectedbidarray;
            data.save().then(console.log("----------------------BID selection END---------------------")).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
};

module.exports={bidvalidator};