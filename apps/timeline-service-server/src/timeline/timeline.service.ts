import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimelineServiceBase } from "./base/timeline.service.base";

@Injectable()
export class TimelineService extends TimelineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
