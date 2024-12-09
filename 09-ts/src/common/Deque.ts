export class Deque<T> {
    private items: { [key: number]: T } = {};
    private front: number = 0;
    private rear: number = 0;

    constructor(initialItems?: T[]) {
        if (initialItems && Array.isArray(initialItems)) {
            initialItems.forEach((item, index) => {
                this.items[index] = item;
            });
            this.rear = initialItems.length;
        }
    }

    push(item: T): void {
        this.items[this.rear] = item;
        this.rear++;
    }

    unshift(item: T): void {
        this.front--;
        this.items[this.front] = item;
    }

    pop(): T | undefined {
        if (this.isEmpty()) return undefined;

        this.rear--;
        const item = this.items[this.rear];
        delete this.items[this.rear];
        return item;
    }

    shift(): T | undefined {
        if (this.isEmpty()) return undefined;

        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty(): boolean {
        return this.front === this.rear;
    }

    size(): number {
        return this.rear - this.front;
    }

}
