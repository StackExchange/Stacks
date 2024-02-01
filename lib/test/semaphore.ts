export default class Semaphore {
    maxConcurrency: number;
    currentConcurrency: number;
    queue: Array<(value?: unknown) => void>;

    constructor(maxConcurrency: number) {
        this.maxConcurrency = maxConcurrency;
        this.currentConcurrency = 0;
        this.queue = [];
    }

    async acquire() {
        if (this.currentConcurrency < this.maxConcurrency) {
            this.currentConcurrency++;
        } else {
            await new Promise((resolve) => this.queue.push(resolve));
        }
    }

    release() {
        this.currentConcurrency--;

        if (this.queue.length > 0) {
            const nextResolve = this.queue.shift() as (value?: unknown) => void;
            nextResolve();
        }
    }
}
