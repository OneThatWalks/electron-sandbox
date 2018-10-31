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
    const row1 = $('<div class=\"row\"></div>');

    startButton = $('<button id=\"startButton\" type=\"button\" class=\"btn btn-default\">Start</button>');
    stopButton = $('<button id=\"stopButton\" type=\"button\" class=\"btn btn-default\">Stop</button>');

    row1.append(startButton);
    row1.append(stopButton);

    const row2 = $('<div class=\"row\"></div>');

    canvas = $('<canvas id=\"myCanvas\" width=\"320\" height=\"240\" style=\"border: 1px solid #000000\"></canvas>'); // todo: move this to a class

    row2.append(canvas);

    selector.append(row1);
    selector.append(row2);

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

