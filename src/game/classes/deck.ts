import { Card } from './card';
import { shuffle } from 'lodash';

export class Deck {
  // rightmost index is the "top" of the deck.
  cards: Card[];
  burn: Card;

  constructor(cards: Card[]) {
    this.cards = shuffle(cards);
    this.burn = this.cards.pop();
  }
}
