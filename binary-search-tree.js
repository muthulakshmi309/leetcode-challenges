class BST {
    root;
    constructor() {
        this.root = null;
    }

    getRoot() {
        return this.root;
    }

    setRoot(elem) {
        this.root = new Node(elem);
    }

    insertTo(root, elem) {
        if (!root) {
            return new Node(elem);
        }
        if (elem < root.data) {
            root.left = this.insertTo(root.left, elem);
        } else {
            root.right = this.insertTo(root.right, elem);
        }
        return root;
    }

    insert(elem) {
        this.root = this.insertTo(this.root, elem);
        // let newNode = new Node(elem);
        // if (!this.root) {
        //     this.root = newNode;
        // } else {
        //     (function ins(node) {
        //         if (elem < node.data) {
        //             if (node.left) {
        //                 ins(node.left);
        //             } else {
        //                 node.left = newNode;
        //             }
        //         } else {
        //             if (node.right) {
        //                 ins(node.right);
        //             } else {
        //                 node.right = newNode;
        //             }
        //         }
        //     })(this.root);
        // }
    }
    delete(elem) { }
    search(node, elem) {
        let elemFound;
        (function findElem(node, elem) {
            console.log('call')
            if (elem === node.data) {
                elemFound = node;
                return elemFound;
            }
            if (!elemFound) {
                elem < node.data && node.left && findElem(node.left, elem);
                elem > node.data && node.right && findElem(node.right, elem);
            }
        })(node, elem);
        return elemFound;
    }

    //It will be same as the insertion order
    preOrder(node) {
        console.log(node.data);
        node.left && this.preOrder(node.left);
        node.right && this.preOrder(node.right);
    }

    //It will sort the binary search tree
    inOrder(node) {
        node.left && this.inOrder(node.left);
        console.log(node.data);
        node.right && this.inOrder(node.right);
    }
    postOrder(node) {
        node.left && this.preOrder(node.left);
        node.right && this.preOrder(node.right);
        console.log(node.data);
    }
}

class Node {
    data;
    left;
    right;
    constructor(elem, left = null, right = null) {
        this.data = elem;
        this.left = left;
        this.right = right;
    }
}

(function createBST() {
    let bst = new BST();
    bst.insert(50);
    bst.insert(30);
    bst.insert(20);
    bst.insert(40);
    bst.insert(70);
    bst.insert(60);
    bst.insert(80);
    let root = bst.getRoot();
    console.log('------ INORDER -----');
    bst.inOrder(root);
    console.log('------ PREORDER -----');
    bst.preOrder(root);
    console.log('------ POSTORDER -----');
    bst.postOrder(root);
    console.log(bst.search(root, 80));



})();