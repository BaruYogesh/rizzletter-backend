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
  handleEvent(@MessageBody() data: string): WsResponse<unknown> {
    console.log(data);
    const event = 'events';
    return { event, data };
  }
  

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
