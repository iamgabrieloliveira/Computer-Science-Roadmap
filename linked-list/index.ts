class Node<T> {
    public next: Node<T> | null = null;
    public prev: Node<T> | null = null;

    constructor(public value: T) {}
}

class LinkedList<T> {
    private head: Node<T> | null = null;

    private getLast(node: Node<T>): Node<T> {
        return node.next === null ? node : this.getLast(node.next);
    }

    insertAtBegin(value: T): Node<T> {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            return node;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;

        return node;
    }

    deleteByValue(value: T) {
        const node = this.findNodeByValue(value);
        this.deleteNode(node);
    }

    deleteNode(node: Node<T>) {
        if (node.prev === null) {
            return;
        }

        node.prev.next = node.next;
    }

    findNodeByValue(value: T): Node<T> | null {
        let head = this.head;

        while(head !== null) {
            if (head.value === value) {
                return head;
            }

            head = head.next;
        }

        return null;
    }

    insertAtEnd(value: T): Node<T> {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            return node;
        }

        const lastNode = this.getLast(this.head);

        lastNode.next = node;
        node.prev = lastNode;

        return node;
    }

    printAll(): void {
        let head = this.head;

        while (head !== null) {
            console.log(head.value);
            head = head.next;
        }
    }
}

const list = new LinkedList<number>();

list.insertAtEnd(10);
list.insertAtEnd(15);
list.insertAtEnd(2000);
list.insertAtEnd(20);
list.insertAtBegin(1);
list.insertAtBegin(8);
list.deleteByValue(20)

list.printAll();
