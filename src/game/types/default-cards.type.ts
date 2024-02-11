import { Card } from '../classes/card';
import { CardType } from './card-type.enum';
import { DefaultCardDefinition } from './default-card-definition.enum';

export class defaultSpy extends Card {

}

export class defaultGuard extends Card {
    constructor() {
        super({
            ...DefaultCardDefinition[CardType.GUARD]
        });
    } 
}