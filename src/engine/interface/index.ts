import { Application } from 'pixi.js';

export interface Renderable {
    attachTo(app: Application): void;
}
