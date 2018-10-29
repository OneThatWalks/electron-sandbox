import * as $ from 'jquery';
import { IGame } from './interfaces/igame';
import { Game } from './sandbox/game';

let container,
    canvas: JQuery,
    startButton: JQuery,
    stopButton: JQuery,
    game: IGame;

$(document).ready(() => {
    container = $('#container');

    if (container) {
        init(container);
    }
});


function init(selector: JQuery): void {
    startButton = $('<button id=\"startButton\" type=\"button\">Start</button>');
    stopButton = $('<button id=\"stopButton\" type=\"button\">Stop</button>');

    canvas = $('<canvas id=\"myCanvas\" width=\"320\" height=\"240\" style=\"border: 1px solid #000000\"></canvas>'); // todo: move this to a class

    selector.append(startButton);
    selector.append(stopButton);
    selector.append(canvas);

    stopButton.on('click', async () => {
        if (game) {
            game.stop();
        }
    });

    startButton.on('click', async () => {
        if (!game) {
            game = new Game();
        }
        game.start();
    });
}

