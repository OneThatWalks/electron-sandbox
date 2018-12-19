import { Loc } from './../models/loc';
import { Sprite } from './../models/sprite';

/**
 * Describes any game object
 *
 * @export
 * @interface IGameObject
 */
export interface IGameObject {

    /**
     * The {Sprite} of the {GameObject}
     *
     * @returns {Sprite}
     * @memberof IGameObject
     */
    sprite(): Sprite;


    /**
     * Game object location
     *
     * @returns {Loc}
     * @memberof IGameObject
     */
    location(): Loc;
}