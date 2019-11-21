import { getTimestamp, HighPrecisionTimeStamp } from './timing';

export class StopWatch {
    private isRunning: boolean;
    private startTimeStamp: HighPrecisionTimeStamp;
    private elapsed: HighPrecisionTimeStamp;

    constructor() {
        this.reset();
    }

    start(): void {
        if (this.isRunning) {
            return;
        }

        this.startTimeStamp = getTimestamp();
        this.isRunning = true;
    }

    stop(): void {
        if (!this.isRunning) {
            return;
        }

        this.elapsed += getTimestamp() - this.startTimeStamp;
        this.isRunning = false;
    }

    reset(): void {
        this.elapsed = 0;
        this.isRunning = false;
        this.startTimeStamp = 0;
    }

    getElapsed(): HighPrecisionTimeStamp {
        let elapsed = this.elapsed;

        if (this.isRunning) {
            elapsed += getTimestamp() - this.startTimeStamp;
        }

        return elapsed;
    }
}
