import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { User } from '../../models';

/** Users should be able to login */
@ApiUseTags('login')
@Controller('login')
export class ApiController {
  constructor(
    // @Inject('TrialService') private readonly trialService: TrialService
  ) {}

  @ApiOperation({ title: 'Get access token' })
  @Post('')
  async login(@Body() user: User) {
    // TODO Verify the user
    // See https://www.npmjs.com/package/jsonwebtoken
    return jwt.sign({ user: user.username }, 'MY_SECRET_KEY');
  }
}
