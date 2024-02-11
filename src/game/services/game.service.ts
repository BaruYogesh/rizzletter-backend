import { Injectable } from '@nestjs/common';

import { Deck } from '../classes/deck';
import { Game } from '../classes/game';
import { Player } from '../classes/player';

import { defaultGuard } from '../types/default-cards.type';

@Injectable()
export default class GameService {
    constructor() {

    }

    async initGame(players: Player[], winCondition: number){
        const deck = new Deck([
            new defaultGuard(),
            new defaultGuard(),
            new defaultGuard(),
            new defaultGuard(),
            new defaultGuard(),
            new defaultGuard(),
        ]);



        const game = new Game({
            players,
            winCondition,
            joinCode: 'x',
            deck,
        })
    }
}