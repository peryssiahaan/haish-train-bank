import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryFailedFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message;

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    const detail = exception.driverError['detail'] ?? message;

    if (message.includes('duplicate')) {
      statusCode = HttpStatus.BAD_REQUEST;
    }

    response.status(statusCode).json({
      statusCode: statusCode.toString(),
      error: detail,
    });
  }
}
