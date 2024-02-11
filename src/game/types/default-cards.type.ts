import { Card } from '../classes/card';
import { CardType } from './card-type.enum';
import { DefaultCardDefinition } from './default-card-definition.map';

export class defaultSpy extends Card {
    constructor() {
        super({
            ...DefaultCardDefinition[CardType.SPY]
        })
    }

}

export class defaultGuard extends Card {
    constructor() {
        super({
            ...DefaultCardDefinition[CardType.GUARD]
        });
    } 
}