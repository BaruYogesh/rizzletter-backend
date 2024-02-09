import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets/decorators';
import { WsResponse } from '@nestjs/websockets/interfaces';
import { from, map, Observable } from 'rxjs';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GameGateway {
  @SubscribeMessage('events')
  findAll(@MessageBody() _data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
