import { Canvas } from './canvas/canvas';
import { ICanvas } from '../interfaces/icanvas';
import { IGameRenderer } from './../interfaces/igame-renderer';
import { IGame } from '../interfaces/igame'

export class GameRenderer implements IGameRenderer {

    private _container: JQuery;
    private _settings: any;
    private _canvas: ICanvas;
    private _game: IGame;

    /**
     * Creates an instance of the Game Renderer
     * 
     * @Notes this class is responsible for all UI elements
     */
    constructor(container: JQuery, settings: any, game: IGame) {
        this._container = container;
        this._settings = settings;
        this._game = game;

        this._init();
    }

    _init(): void {
        this._canvas = new Canvas('game_renderer_canvas', this._settings, this);

        if (this._canvas && this._canvas.canvas()) {
            this._container.append(this._canvas.canvas());
        }

        window.addEventListener('resize', (_) => {
            if (this._settings.verboseLogging) console.log(`game-renderer.ts - _init(): window resize event triggered`);
            this._canvas.resize();
        });

        this._canvas.resize();

        this.draw();
    }

    draw(): void {
        if (this._settings.verboseLogging) console.log('Drawing');

        // Get references to the elements
        const canvasElement = this._canvas.canvas();
        const canvasContext = this._canvas.context();

        if (!this._game.running()) {
            // If game is stopped show pause/stop screen

            const button = { // TODO: Move into class
                x: (canvasElement.width / 2) - ((canvasElement.width / 16 * 3) / 2), // Get x for center and subtract half of width
                y: (canvasElement.height / 2) - ((canvasElement.height / 9) / 2), // Get y for center and subtract half of height
                width: canvasElement.width / 16 * 3,
                height: canvasElement.height / 9,
                text: 'Start',
                textFill: 'black',
                outline: 'black',
                fill: 'white',
                lineWidth: 1
            }

            // Draw the button
            canvasContext.fillStyle = button.fill;
            canvasContext.fillRect(button.x, button.y, button.width, button.height);

            canvasContext.strokeStyle = button.outline;
            canvasContext.lineWidth = button.lineWidth;
            canvasContext.strokeRect(button.x, button.y, button.width, button.height);

            canvasContext.font = `${button.height / (9/10)}px Segoe UI`;
            canvasContext.textAlign = 'center';
            canvasContext.fillStyle = button.textFill;
            canvasContext.fillText(button.text, (button.x + (button.width / 2)), (button.y + (button.height * (9/10))));
            // TODO: Collision rectangles
            return;
        }

        // Clear the canvas
        canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);

        // Define tile width/height
        const columnWidth = canvasElement.width / this._settings.map.mapWidth,
            rowHeight = canvasElement.height / this._settings.map.mapHeight;

        // Get current x position
        let currentX = 0;

        // Draw map tiles
        for (let x = 0; x < this._settings.map.mapWidth; x++) {
            let currentY = 0;

            for (let y = 0; y < this._settings.map.mapHeight; y++) {
                canvasContext.strokeStyle = this._settings.map.tileBorderColor || 'black'; // Fallback
                canvasContext.strokeRect(currentX, currentY, columnWidth, rowHeight);
                currentY += rowHeight;
            }

            currentX += columnWidth;
        }
    }
}