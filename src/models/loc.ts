export class Loc {
    private _x: number;
    private _y: number;
    private _z: number;

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }


    public get z(): number {
        return this._z;
    }

    public set x(value: number) {
        this._x = value;
    }

    public set y(value: number) {
        this._y = value;
    }

    public set z(value: number) {
        this._z = value;
    }

}