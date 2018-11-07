import { IGameRenderer } from './../interfaces/igame-renderer';

export class GameRenderer implements IGameRenderer {

    private _container: JQuery;
    private _settings: any;

    /**
     * Creates an instance of the Game Renderer
     * 
     * @Notes this class is responsible for all UI elements
     */
    constructor(container: JQuery, settings: any) {
        this._container = container;
        this._settings = settings;
    }

    draw(): void {
        console.log('Drawing');
    }
}