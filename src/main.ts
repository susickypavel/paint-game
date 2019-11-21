import { Engine } from './engine/engine';
import { Texture, Sprite } from 'pixi.js';

const engine = new Engine();
engine.initialize();

const texture = Texture.from('assets/textures/masterpiece.jpg');
const sprite = new Sprite(texture);
sprite.anchor.set(0.5);
sprite.x = engine.app.screen.width / 2;
sprite.y = engine.app.screen.height / 2;
engine.app.stage.addChild(sprite);

engine.render(() => {
    sprite.rotation += 0.01;
});

engine.run();
