import { Injectable } from "@nestjs/common";
import { TimelineInput } from "../timelineModule/TimelineInput";

@Injectable()
export class TimelineModuleService {
  constructor() {}
  async SubmitTimeline(args: TimelineInput[]): Promise<string> {
    throw new Error("Not implemented");
  }
}
