import * as $ from 'jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { IGame } from './interfaces/igame';
import { Game } from './sandbox/game';
import * as fs from 'fs';
import * as path from 'path';


let container,
    settings: any,
    game: IGame;

$(document).ready(async () => {
    container = $('#container');

    const set = await readFile('settings.json');
    settings = JSON.parse(set);

    if (container) {
        init(container, settings);
    }
});

async function readFile(file: string, opt = 'utf8'): Promise<any> {
    return new Promise((res, rej) => {
        fs.readFile(path.join(__dirname, 'assets', file), opt, (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        });
    });
}


function init(selector: JQuery, settings: any): void {
    game = new Game(selector, settings);
}

