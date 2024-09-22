import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TimelineModuleService } from "./timelinemodule.service";
import { TimelineInput } from "../timelineModule/TimelineInput";

@swagger.ApiTags("timelineModules")
@common.Controller("timelineModules")
export class TimelineModuleController {
  constructor(protected readonly service: TimelineModuleService) {}

  @common.Post("/api/timeline")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitTimeline(
    @common.Body()
    body: TimelineInput[]
  ): Promise<string> {
        return this.service.SubmitTimeline(body);
      }
}
