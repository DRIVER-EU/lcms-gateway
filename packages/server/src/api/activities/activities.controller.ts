import { ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery } from '@nestjs/swagger';
import { Controller, Get, Query, Param } from '@nestjs/common';
import { ActivityOverview, Activity } from '../../models';

/** Users should be able to get the list of activities */
@ApiUseTags('activities')
@Controller('activities')
export class ActivitiesController {
  constructor(
    // @Inject('TrialService') private readonly trialService: TrialService
  ) {}

  @ApiOperation({ title: 'Get a list of exercise activities' })
  @ApiImplicitQuery({
    name: 'take',
    required: false,
    description: 'How many items to take (default 25)',
    type: Number,
  })
  @ApiImplicitQuery({
    name: 'skip',
    required: false,
    description: 'How many items to skip (default 0)',
    type: Number,
  })
  @ApiResponse({ status: 200, isArray: true, type: ActivityOverview })
  @Get('exercise')
  async findSomeExerciseActivities(@Query('skip') skip = 0, @Query('take') take = 25) {
    return [new ActivityOverview('1', 'Test me')];
  }

  @ApiOperation({ title: 'Get a list of active activities' })
  @ApiImplicitQuery({
    name: 'take',
    required: false,
    description: 'How many items to take (default 25)',
    type: Number,
  })
  @ApiImplicitQuery({
    name: 'skip',
    required: false,
    description: 'How many items to skip (default 0)',
    type: Number,
  })
  @ApiResponse({ status: 200, isArray: true, type: ActivityOverview })
  @Get('actual')
  async findSomeActivities(@Query('skip') skip = 0, @Query('take') take = 25) {
    return [new ActivityOverview('2', 'Help me')];
  }

  @ApiOperation({ title: 'Get a list of recent exercise activities' })
  @ApiImplicitQuery({
    name: 'minutes',
    required: true,
    description: 'Number of minutes since the last edit',
    type: Number,
  })
  @ApiResponse({ status: 200, isArray: true, type: ActivityOverview })
  @Get('exercise/recent')
  async findRecentExerciseActivities(@Query('minutes') minutes: number) {
    return [new ActivityOverview('3', `Recent exercise activity since the last ${minutes} minutes`)];
  }

  @ApiOperation({ title: 'Get a list of recent actual activities' })
  @ApiImplicitQuery({
    name: 'minutes',
    required: true,
    description: 'Number of minutes since the last edit',
    type: Number,
  })
  @ApiResponse({ status: 200, isArray: true, type: ActivityOverview })
  @Get('actual/recent')
  async findRecentActivities(@Query('minutes') minutes: number) {
    return [new ActivityOverview('4', `Recent activity since the last ${minutes} minutes`)];
  }

  @ApiOperation({ title: 'Get an activity by ID' })
  @ApiResponse({ status: 200, type: Activity })
  @Get(':id')
  async getActivity(@Param('id') id: string) {
    return new Activity(id, `Recent activity`);
  }

  @ApiOperation({ title: 'Get an activity\'s multidisciplinary views' })
  // @ApiResponse({ status: 200, type: Activity })
  @Get(':id/multi')
  async getActivityMulti(@Param('id') id: string) {
    return [{ id: '1', title: 'My multi title', description: 'A description' }]
  }

  @ApiOperation({ title: 'Get an activity\'s monodisciplinary views' })
  // @ApiResponse({ status: 200, type: Activity })
  @Get(':id/mono')
  async getActivityMono(@Param('id') id: string) {
    return [{ id: '1', title: 'My mono title', description: 'A description' }]
  }
}
