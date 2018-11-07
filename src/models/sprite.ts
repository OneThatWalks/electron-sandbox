export class Sprite {

    /**
     * The file for the sprite
     *
     * @type {File}
     * @memberof Sprite
     */
    public image: File;

    // TODO: accessors
    private _width: number;
    private _height: number;

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }
}