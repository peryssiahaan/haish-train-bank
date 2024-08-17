import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IQuestionService } from '../implementation/service/question.service';
import {
  CreateQuestionDTO,
  FindQuestionParamDTO,
  UpdateQuestionDTO,
} from '../implementation/dto/question.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Question')
@Controller({ version: '1', path: 'questions' })
export class QuestionController {
  constructor(private readonly questionService: IQuestionService) {}

  @Get()
  async getAll() {
    return this.questionService.findMany();
  }

  @Post()
  async addOne(
    @Body()
    body: CreateQuestionDTO,
  ) {
    return this.questionService.insert(body);
  }

  @Get(':id')
  async getById(
    @Param()
    param: FindQuestionParamDTO,
  ) {
    return this.questionService.findById(param);
  }

  @Put(':id')
  async update(
    @Param()
    param: FindQuestionParamDTO,

    @Body()
    body: UpdateQuestionDTO,
  ) {
    return this.questionService.update(param, body);
  }

  @Delete(':id')
  async removeById(
    @Param()
    param: FindQuestionParamDTO,
  ) {
    return this.questionService.delete(param);
  }
}
