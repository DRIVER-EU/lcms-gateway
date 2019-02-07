import { ApiModelProperty } from '@nestjs/swagger';

/** Overview of the activity */
export class ActivityOverview {
  @ApiModelProperty({ description: 'Unique identifier of the activity' })
  id: string;
  @ApiModelProperty({ description: 'Name of the activity' })
  title: string;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}

/** Detail of the activity */
export class Activity extends ActivityOverview {
  @ApiModelProperty({ description: 'When the activity was created' })
  created: Date;
  @ApiModelProperty({ description: 'Who created the activity' })
  user: string;

  constructor(id: string, title: string) {
    super(id, title);
  }
}
