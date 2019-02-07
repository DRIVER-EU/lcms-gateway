import { ApiModelProperty } from '@nestjs/swagger';

export class User {
  @ApiModelProperty({ description: 'User name' })
  username: string;
  @ApiModelProperty({ description: 'Password' })
  password: string;
}
