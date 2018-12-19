import { IGameObject } from './igame-object';
export interface IGameObjectFactory {

    /**
     * Creates a game object
     *
     * @returns {IGameObject}
     * @memberof IGameObjectFactory
     */
    create(): IGameObject;
}