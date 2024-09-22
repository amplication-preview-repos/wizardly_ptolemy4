import { Module } from "@nestjs/common";
import { TimelineModuleBase } from "./base/timeline.module.base";
import { TimelineService } from "./timeline.service";
import { TimelineController } from "./timeline.controller";
import { TimelineResolver } from "./timeline.resolver";

@Module({
  imports: [TimelineModuleBase],
  controllers: [TimelineController],
  providers: [TimelineService, TimelineResolver],
  exports: [TimelineService],
})
export class TimelineModule {}
