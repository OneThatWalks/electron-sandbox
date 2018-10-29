import { IGameRenderer } from './../interfaces/igame-renderer';

export class GameRenderer implements IGameRenderer {
    draw(): void {
        console.log('Drawing');
    }
}