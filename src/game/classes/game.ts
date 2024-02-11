import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';

export interface createGame {
    players: Player[];
    winCondition: number;
    joinCode: string;
    deck: Deck;
}

export class Game {
    players: Player[];
    currentTurn: number;
    winCondition: number;
    joinCode: string;
    deck: Deck;


    constructor(input: createGame) {
        const {players, winCondition, joinCode, deck} = input;

        this.players = players;
        this.currentTurn = 0;
        this.winCondition = winCondition;
        this.joinCode = joinCode;
        this.deck = deck;
    }
}