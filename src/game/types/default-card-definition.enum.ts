

import { CardType } from './card-type.enum';


type CardDefinition = {
    cardName: CardType,
    description: string,
    rank: number
}

export const DefaultCardDefinition = new Map<CardType, CardDefinition> ([
    [CardType.GUARD,
        {
            cardName: CardType.GUARD ,
            description: 'Pick another player choose a card type. If they are holding that card, that player is out of the round',
            rank: 1,
        }]
]);