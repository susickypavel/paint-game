import { Application, Text, UPDATE_PRIORITY } from 'pixi.js';

// Create Pixi Application
// TODO(santha): abstract PIXI code
const app = new Application();

// Add HTML canvas to the document
document.body.appendChild(app.view);

// Create FPS meter sprite
const fpsMeter = new Text('test', {
    fontFamily: 'monospace',
    fontSize: 20,
    fill: 0xffffff
});

// Add FPS meter to the scene
app.stage.addChild(fpsMeter);

// Register FPS meter update ticker
app.ticker.add(() => {
    fpsMeter.text = app.ticker.FPS.toFixed(0);
}, null, UPDATE_PRIORITY.UTILITY);
