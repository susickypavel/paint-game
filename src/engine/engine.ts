import { Application } from 'pixi.js';
import { FpsMeter } from './fps-meter';

export class Engine {
    public readonly app = new Application({
        width: window.innerWidth,
        height: window.innerHeight
    });

    private readonly fpsMeter = new FpsMeter();

    initialize(): void {
        document.body.appendChild(this.app.view);
    }

    render(renderer: () => void): void {
        this.app.ticker.add(renderer);
    }

    run(): void {
        this.fpsMeter.attachTo(this.app);
    }
}
