import { CardType } from '../types/card-type.enum';

export interface CreateCard {
  cardName: CardType;
  rank: number;
  description: string;
}

export class Card {
  cardName: CardType;
  rank: number;
  description: string;

  constructor(createCard: CreateCard) {
    this.cardName = createCard.cardName;
    this.description = createCard.description;
    this.rank = createCard.rank;
  }
}
