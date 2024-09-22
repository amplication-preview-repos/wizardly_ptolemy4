import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimelineService } from "./timeline.service";
import { TimelineControllerBase } from "./base/timeline.controller.base";

@swagger.ApiTags("timelines")
@common.Controller("timelines")
export class TimelineController extends TimelineControllerBase {
  constructor(protected readonly service: TimelineService) {
    super(service);
  }
}
