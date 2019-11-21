import { Text, UPDATE_PRIORITY, Application } from 'pixi.js';
import { Renderable } from './interface';

export class FpsMeter implements Renderable {
    private readonly sprite = new Text('0', {
        fontFamily: 'monospace',
        fontSize: 30,
        fill: 0xffffff
    });

    attachTo(app: Application): void {
        // Add to the scene
        app.stage.addChild(this.sprite);

        // Register utility ticker to update text-sprite value
        app.ticker.add(() => {
            this.sprite.text = app.ticker.FPS.toFixed(0);
        }, null, UPDATE_PRIORITY.UTILITY);
    }
}
