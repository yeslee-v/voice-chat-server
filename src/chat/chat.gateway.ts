import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: any,
    @MessageBody() payload: any,
  ): void {
    console.log('>>', client, payload);

    client.emit('room', { name: 'Joined!' });
  }
}
