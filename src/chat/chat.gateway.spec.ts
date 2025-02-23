import { Test, TestingModule } from '@nestjs/testing';
import { Socket } from 'socket.io';
import { ChatGateway } from './chat.gateway';

describe('ChatGateway', () => {
  let gateway: ChatGateway;
  let mockSocket: Partial<Socket>;

  beforeEach(async () => {
    mockSocket = {
      emit: jest.fn(),
      id: 'test-socket-id',
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatGateway],
    }).compile();

    gateway = module.get<ChatGateway>(ChatGateway);
  });

  it('should be defined', () => {
    console.log('init: ', gateway);
    expect(gateway).toBeDefined();
  });

  it('should be emit', () => {
    console.log('start to emit');
    const payload = { message: 'Connect to chat!' };

    gateway.handleMessage(mockSocket, payload);

    expect(mockSocket.emit).toHaveBeenCalledWith('room', { name: 'Joined!' });
  });
});
