import { ApiProperty } from '@nestjs/swagger';

export class DeleteCat {
  @ApiProperty()
  id: string;
}
