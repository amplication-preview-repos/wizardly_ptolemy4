import * as graphql from "@nestjs/graphql";
import { TimelineInput } from "../timelineModule/TimelineInput";
import { TimelineModuleService } from "./timelinemodule.service";

export class TimelineModuleResolver {
  constructor(protected readonly service: TimelineModuleService) {}

  @graphql.Mutation(() => String)
  async SubmitTimeline(
    @graphql.Args()
    args: TimelineInput[]
  ): Promise<string> {
    return this.service.SubmitTimeline(args);
  }
}
