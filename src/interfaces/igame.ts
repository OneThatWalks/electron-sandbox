export interface IGame {
    start(): any;
    stop(): void;

    setDelta(delta: number): void;
}