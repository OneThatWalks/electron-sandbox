import { IGameManager } from './../interfaces/igame-manager';

export class GameManager implements IGameManager {
    private _settings: any;

    /**
     * Creates the game manager
     */
    constructor(settings: any) {
        this._settings = settings;
    }

    update(): void {
        console.log('Update');
    }
}