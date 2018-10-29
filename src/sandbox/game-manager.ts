import { IGameManager } from './../interfaces/igame-manager';
import { ICharacter, Character } from './player';
import * as $ from 'jquery';

export class GameManager implements IGameManager {
    private _characters: Array<ICharacter>;

    private _div: JQuery;
    private _informationSpan: JQuery;
    private _updateCharacterButton: JQuery;

    /**
     * Creates the game manager
     */
    constructor() {
        this._characters = [];
        this._characters[0] = new Character({ latitude: 0, longitude: 0, heading: 0 }, 0, 'Test Character', 100);

        this._createElements();
    }

    _createElements(): void {
        if (!this._div && $('#gameManager').length === 0) {
            this._div = $('<div id=\"gameManager\">GameManager: </div>');
            this._informationSpan = $('<span id=\"gameManagerInformation\"></span>');
            this._updateCharacterButton = $('<button id=\"gameManagerCharacterButton\">Update Character(s)</button>');
            this._div.append(this._informationSpan);
            this._div.append(this._updateCharacterButton);
            $('body').append(this._div);
        } else {
            this._div = $('#gameManager');
            this._informationSpan = $('#gameManagerInformation');
            this._updateCharacterButton = $('#gameManagerCharacterButton');
        }

        this._updateCharacterButton.on('click', () => {
            this._characters.forEach(element => {
                element.moveSpaces(Math.round(Math.random() * 359), Math.round(Math.random() * 5));
            });
        });
    }

    _addOrUpdateCharacterElement(character: ICharacter): void {
        let spanForCharacter;
        const characterId = character.id();
        if ($(`#characterInfo_${characterId}`).length == 0) {
            spanForCharacter = $(`<span id=\"characterInfo_${characterId}\"></span>`);
            this._div.append(spanForCharacter);
        } else {
            spanForCharacter = $(`#characterInfo_${characterId}`);
        }
        const characterLocation = character.location();
        spanForCharacter.html(`Name: ${character.name()} Location: (${characterLocation.latitude},${characterLocation.longitude}) Heading: ${characterLocation.heading} Health: ${character.health()}`);
    }

    update(): void {
        this._informationSpan.html(`Characters: ${this._characters.length}`);
        this._characters.forEach(element => {
            this._addOrUpdateCharacterElement(element);
        });
        console.log('Update');
    }
}