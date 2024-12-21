interface QueueItem {
    score: number;
}

export class PriorityQueue<T extends QueueItem> {
    private heap: T[] = [];

    enqueue(item: T): void {
        this.heap.push(item);
        this.bubbleUp();
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) return undefined;

        const root = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0 && last) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return root;
    }

    peek(): T | undefined {
        return this.isEmpty() ? undefined : this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const current = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (current.score >= parent.score) break;

            this.heap[index] = parent;
            index = parentIndex;
        }

        this.heap[index] = current;
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const current = this.heap[index];

        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftIndex < length) {
                const left = this.heap[leftIndex];
                if (left.score < current.score) {
                    swapIndex = leftIndex;
                }
            }

            if (rightIndex < length) {
                const right = this.heap[rightIndex];
                if (
                    (swapIndex === null && right.score < current.score) ||
                    (swapIndex !== null && right.score < this.heap[swapIndex].score)
                ) {
                    swapIndex = rightIndex;
                }
            }

            if (swapIndex === null) break;

            this.heap[index] = this.heap[swapIndex];
            index = swapIndex;
        }

        this.heap[index] = current;
    }
}
