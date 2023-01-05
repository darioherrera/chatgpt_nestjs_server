import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Message } from './message';
import { OpenAIService } from './openai.service';

@Controller()
export class AppController {

  constructor(
    private aiService: OpenAIService,
    private readonly appService: AppService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/sendMessage")
  getStatus(@Body() message: Message) {
    return this.aiService.sendMessage(message.prompt, message.conversationId, message.messageId);
  }

}
