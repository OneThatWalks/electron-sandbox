import { IGameRenderer } from './../../interfaces/igame-renderer';
import { ICanvas } from './../../interfaces/icanvas';
import * as $ from 'jquery';

export class Canvas implements ICanvas {

    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _settings: any;
    private _renderer: IGameRenderer;

    /**
     * Creates an instance of a canvas
     */
    constructor(id: string, settings: any, renderer: IGameRenderer) {
        this._settings = settings;
        this._renderer = renderer;

        const element = $('canvas')[0];

        if (!element) {
            throw new Error('Could not locate canvas in DOM');
        }

        element.id = id;

        this._canvas = <HTMLCanvasElement>element;
        this._context = (<HTMLCanvasElement>element).getContext('2d');

        this._canvas.addEventListener('click', (event) => {
            if (this._settings.verboseLogging) console.log(`canvas.ts: Clicked ${event.x},${event.y}`);
        });

        this._canvas.addEventListener('mousedown', (event) => {
            if (this._settings.verboseLogging) console.log(`canvas.ts: Mouse Down ${event.x},${event.y}`);
        });

        this._canvas.addEventListener('mouseup', (event) => {
            if (this._settings.verboseLogging) console.log(`canvas.ts: Mouse Up ${event.x},${event.y}`);
        });

        this._canvas.addEventListener('mousemove', (event) => {
            if (this._settings.verboseLogging) console.log(`canvas.ts: Mouse Move ${event.x},${event.y}`);
        });
    }


    canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    context(): CanvasRenderingContext2D {
        return this._context;
    }

    resize(): void {
        const canvas = this._canvas;
        const height = canvas.offsetWidth / (16 / 9); // get 16:9 ratio
        if (this._settings.verboseLogging) console.log(`canvas.ts - resize(): resizing canvas to ${canvas.offsetWidth}W x ${canvas.offsetWidth}H`)
        canvas.width = canvas.offsetWidth;
        canvas.height = height;
    }
}