import { GameRenderer } from './game-renderer';
import { GameManager } from './game-manager';
import { IGame } from '../interfaces/igame';
import { IGameManager } from './../interfaces/igame-manager';
import { IGameRenderer } from './../interfaces/igame-renderer';
import { delay } from '../util/util';


/**
 * Creates a 'Game' which is meant to be a singleton
 *
 * @export
 * @class Game
 * @implements {IGame}
 */
export class Game implements IGame {

    private _running: boolean;
    private _delta: number;
    private _manager: IGameManager;
    private _renderer: IGameRenderer;

    /**
     * Creates a game
     */
    constructor(container: JQuery, settings: any, delta: number = 500) {
        this._running = false;
        this._delta = settings.game.delta !== undefined ? settings.game.delta : delta;
        this._manager = new GameManager();
        this._renderer = new GameRenderer();

        this._registerEvents();
    }

    _registerEvents() {
        window.onkeyup = (event) => {
            this._processInput(event);
        }

        window.onkeydown = (event) => {
            this._processInput(event);
        }
    }

    _processInput(event: KeyboardEvent) {
        console.log(event);

        const keyCode = event.key;
    }

    /**
     * Starts game
     */
    async start() {
        console.log('Starting loop.');
        this._running = true;

        while (this._running) {
            this.update();
            this.draw();
            await delay(this._delta);
        }

        console.log('Loop terminated.');
    }

    /**
     * Stops game
     */
    stop(): void {
        this._running = false;
    }

    /**
     * Sets the game update delta
     * @param delta the update delta in ms
     */
    setDelta(delta: number): void {
        this._delta = delta;
    }

    /**
     * The update for game
     */
    update(): void {
        this._manager.update();
    }

    /**
     * The draw for game
     */
    draw(): void {
        this._renderer.draw();
    }

}