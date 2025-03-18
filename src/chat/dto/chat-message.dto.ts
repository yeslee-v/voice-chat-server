import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ChatMessageDto {
  @IsNotEmpty()
  @IsNumber()
  senderId: number;

  @IsNotEmpty()
  @IsString()
  content: string;
}
