import { GameRenderer } from './game-renderer';
import { GameManager } from './game-manager';
import { IGame } from '../interfaces/igame';
import { IGameManager } from './../interfaces/igame-manager';
import { IGameRenderer } from './../interfaces/igame-renderer';
import { delay } from '../util/util';
import * as $ from 'jquery';

export class Game implements IGame {

    readonly UP_HEADING: number = 0;
    readonly DOWN_HEADING: number = 180;
    readonly LEFT_HEADING: number = 270;
    readonly RIGHT_HEADING: number = 90;

    private _running: boolean;
    private _delta: number;
    private _manager: IGameManager;
    private _renderer: IGameRenderer;
    private _div: JQuery;
    private _informationSpan: JQuery;
    private _nextHeading: number;
    private _nextSpaces: number;

    /**
     * Creates a game
     */
    constructor(delta: number = 500) {
        this._running = false;
        this._delta = delta;
        this._manager = new GameManager();
        this._renderer = new GameRenderer();

        this._createElements();
        this._registerEvents();
    }

    _registerEvents() {
        window.onkeyup = (event) => {
            this._processInput(event);
        }

        window.onkeydown = (event) => {
            //this._processInput(event);
        }
    }

    _processInput(event: KeyboardEvent) {
        console.log(event);

        const keyCode = event.key;

        switch (keyCode) {
            case 'w':
                this._applyHeading(this.UP_HEADING);
                break;
            case 's':
                this._applyHeading(this.DOWN_HEADING);
                break;
            case 'a':
                this._applyHeading(this.LEFT_HEADING);
                break;
            case 'd':
                this._applyHeading(this.RIGHT_HEADING);
                break;
        }

    }

    _applyHeading(heading: number) {
        if (!this._isAdjacentDirection(heading, this._nextHeading)) {
            this._nextSpaces = 0;
        }
        // todo
    }

    _isAdjacentDirection(newHeading: number, currentHeading: number): boolean {
        const headerMaxDegrees = newHeading + 90;
        const headerMinDegrees = newHeading + 90;
        return false;
        if (headerMaxDegrees){} // todo if in the range of the current heading we are adjacent
    }

    _createElements(): void {
        if (!this._div && $('#game').length === 0) {
            this._div = $('<div id=\"game\">Game: </div>');
            this._informationSpan = $('<span id=\"gameInformation\"></span>');
            this._div.append(this._informationSpan);
            $('body').append(this._div);
        } else {
            this._div = $('#game');
            this._informationSpan = $('#gameInformation');
        }
    }

    /**
     * Starts game
     */
    async start() {
        this._informationSpan.html('Running');
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
        this._informationSpan.html('Stopped');
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