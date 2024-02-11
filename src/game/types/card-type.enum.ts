import { Enum, EnumValue } from '@kejistan/enum';

export const CardType = Enum({
    SPY: 'SPY',
    GUARD: 'GUARD',
    PRIEST: 'PRIEST',
    BARON: 'BARON',
    HANDMAID: 'HANDMAID',
    PRINCE: 'PRINCE',
    KING: 'KING',
    COUNTESS: 'COUNTESS',
    PRINCESS: 'PRINCESS'
});

export type CardType = EnumValue<typeof CardType>;