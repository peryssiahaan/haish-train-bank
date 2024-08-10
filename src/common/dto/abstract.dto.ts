import { ApiHideProperty } from '@nestjs/swagger';
import { IAbstractEntity } from '../interface/abstract.interface';

export abstract class AbstractDTO implements IAbstractEntity {
  @ApiHideProperty()
  id: string;

  @ApiHideProperty()
  createdAt: Date;
  @ApiHideProperty()
  createdBy: string;

  @ApiHideProperty()
  updatedAt: Date;
  @ApiHideProperty()
  updatedBy: string;

  @ApiHideProperty()
  deletedAt: Date;
  @ApiHideProperty()
  deletedBy: string;
}
