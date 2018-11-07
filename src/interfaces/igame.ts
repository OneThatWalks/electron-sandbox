export interface IGame {

    /**
     * Starts the Game
     *
     * @returns {*}
     * @memberof IGame
     */
    start(): any;

    /**
     * Stops the Game
     *
     * @memberof IGame
     */
    stop(): void;

    /**
     * Sets the game delta
     *
     * @param {number} delta The time between game ticks
     * @memberof IGame
     */
    setDelta(delta: number): void;
}