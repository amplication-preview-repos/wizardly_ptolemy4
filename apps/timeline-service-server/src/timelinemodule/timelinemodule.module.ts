import { Module } from "@nestjs/common";
import { TimelineModuleService } from "./timelinemodule.service";
import { TimelineModuleController } from "./timelinemodule.controller";
import { TimelineModuleResolver } from "./timelinemodule.resolver";

@Module({
  controllers: [TimelineModuleController],
  providers: [TimelineModuleService, TimelineModuleResolver],
  exports: [TimelineModuleService],
})
export class TimelineModuleModule {}
