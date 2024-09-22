import * as graphql from "@nestjs/graphql";
import { TimelineResolverBase } from "./base/timeline.resolver.base";
import { Timeline } from "./base/Timeline";
import { TimelineService } from "./timeline.service";

@graphql.Resolver(() => Timeline)
export class TimelineResolver extends TimelineResolverBase {
  constructor(protected readonly service: TimelineService) {
    super(service);
  }
}
