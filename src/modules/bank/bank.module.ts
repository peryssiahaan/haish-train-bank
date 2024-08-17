import { Module } from '@nestjs/common';
import { QuestionController } from './controller/question.controller';
import { IQuestionService } from './implementation/service/question.service';
import { QuestionService } from './services/question.service';

@Module({
  controllers: [QuestionController],
  providers: [
    {
      provide: IQuestionService,
      useClass: QuestionService,
    },
  ],
  exports: [IQuestionService],
})
export class BankModule {}
