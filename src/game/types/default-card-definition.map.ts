import { CardType } from './card-type.enum';

type CardDefinition = {
  cardName: CardType;
  description: string;
  rank: number;
};

export const DefaultCardDefinition = new Map<CardType, CardDefinition>([
  [
    CardType.SPY,
    {
      cardName: CardType.SPY,
      description:
        'If you are the only one this round who has played a spy, gain a victory point',
      rank: 0,
    },
  ],
  [
    CardType.GUARD,
    {
      cardName: CardType.GUARD,
      description:
        'Pick another player choose a card type. If they are holding that card, that player is out of the round',
      rank: 1,
    },
  ],
  [
    CardType.PRIEST,
    {
        cardName: CardType.PRIEST,
        description: 'Pick another player. that player must reveal their card to you',
        rank: 2,
    }
  ]
]);
