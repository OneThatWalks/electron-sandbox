import { ICharacter } from './player';
export interface ICharacter {
    id(): number;
    name(): string;
    moveSpaces(heading: number, numberOfSpaces: number): void;
    setLocation(latitude: number, longitude: number): void;
    animate(animation: string): void;
    health(): number;
    location(): Coords;
    addItem(/* TODO: add items */): void;
}

export interface ICoords {
    heading: number;
    latitude: number;
    longitude: number;

    setHeading(heading: number): void;
    setLocation(lat: number, lon: number): void;
}

export class Coords implements ICoords {
    heading: number;
    latitude: number;
    longitude: number;

    /**
     * Initialized coordinates
     */
    constructor(latitude: number, longitude: number, heading: number) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.heading = heading;
    }

    setHeading(heading: number): void {
        if (heading >= 360 && heading < 0) {
            // Correct bad heading
            console.log(`Invalid heading ${heading}, reverting to 0.`);
            heading = 0;
        }

        this.heading = heading;
    }

    setLocation(lat: number, lon: number): void {
        this.latitude = lat;
        this.longitude = lon;
    }
}

export class Character implements ICharacter {

    private _id: number;
    private _name: string;
    private _health: number;
    private _location: ICoords;

    /**
     *
     */
    constructor(location: Partial<ICoords>, id: number, name: string, health: number) {
        this._location = new Coords(location.latitude, location.longitude, location.heading);
        this._id = id;
        this._name = name;
        this._health = health;
    }

    id(): number {
        return this._id;
    }

    name(): string {
        return this._name;
    }

    moveSpaces(heading: number, numberOfSpaces: number): void {
        console.log(`Moving ${typeof(this)}.`);
        this._location.setHeading(heading);

        const headingInRadians = this._location.heading * (Math.PI / 180);
        
        const destinationLatitude = this._location.latitude + Math.round(numberOfSpaces * Math.cos(headingInRadians));
        const destinationLongitude = this._location.longitude + Math.round(numberOfSpaces * Math.sin(headingInRadians));
        console.log(`Location determined, (${destinationLatitude},${destinationLongitude}) from (${this._location.latitude},${this._location.longitude})`);

        this.setLocation(destinationLatitude, destinationLongitude);
        console.log(`${typeof(this)} moved.`);
    }

    setLocation(latitude: number, longitude: number): void {
        console.log(`Setting location for ${typeof(this)}.`);
        this._location.setLocation(latitude, longitude);
        console.log(`${typeof(this)} location set.`);
    }

    animate(animation: string): void {
        console.log(`animated.`);
    }

    health(): number {
        console.log(`Getting health for ${typeof(this)}`);
        return this._health;
    }

    location(): ICoords {
        console.log(`Getting location for ${typeof(this)}`);
        return this._location;
    }

    addItem(): void {
        console.log(`Item add.`);
    }

}
