export interface ICanvas {

    /**
     * Gets the canvas element
     *
     * @returns {HTMLCanvasElement}
     * @memberof ICanvas
     */
    canvas(): HTMLCanvasElement;

    /**
     * Gets the canvas context
     *
     * @returns {CanvasRenderingContext2D}
     * @memberof ICanvas
     */
    context(): CanvasRenderingContext2D;


    /**
     * Resizes the canvas element
     *
     * @param {number} width The new width of the element
     * @param {number} height The new height of the element
     * @memberof ICanvas
     */
    resize(): void;
}