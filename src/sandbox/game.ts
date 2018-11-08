import { GameRenderer } from './game-renderer';
import { GameManager } from './game-manager';
import { IGame } from '../interfaces/igame';
import { IGameManager } from './../interfaces/igame-manager';
import { IGameRenderer } from './../interfaces/igame-renderer';
import { delay } from '../util/util';


/**
 * The 'Game' class, hold all logic related to game
 *
 * @export
 * @class Game
 * @implements {IGame}
 */
export class Game implements IGame {

    private _running: boolean;
    private _delta: number;
    private _settings: any;
    private _manager: IGameManager;
    private _renderer: IGameRenderer;

    /**
     * Creates a game
     */
    constructor(container: JQuery, settings: any, delta: number = 500) {
        this._running = false;
        this._delta = settings.game.delta !== undefined ? settings.game.delta : delta;
        this._settings = settings;
        this._manager = new GameManager(settings);
        this._renderer = new GameRenderer(container, settings, this);

        this._registerEvents();
    }


    /**
     * Registers events for Game
     *
     * @memberof Game
     */
    _registerEvents() {
        window.onkeyup = (event) => {
            this._processInput(event);
        }

        window.onkeydown = (event) => {
            this._processInput(event);
        }
    }


    /**
     * Processes input from the event listeners
     *
     * @param {KeyboardEvent} event
     * @memberof Game
     */
    _processInput(event: KeyboardEvent) {
        if (this._settings.verboseLogging) console.log(event);

        const keyCode = event.key;
    }

    public async start() {
        if (this._settings.verboseLogging) console.log('Starting loop.');
        this._running = true;

        while (this._running) {
            this._update();
            this._draw();
            await delay(this._delta);
        }

        if (this._settings.verboseLogging) console.log('Loop terminated.');
    }

    public stop(): void {
        this._running = false;
    }

    public setDelta(delta: number): void {
        this._delta = delta;
    }

    public running(): boolean {
        return this._running;
    }

    /**
     * The update for game
     */
    _update(): void {
        this._manager.update();
    }

    /**
     * The draw for game
     */
    _draw(): void {
        this._renderer.draw();
    }

}