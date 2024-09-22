import { TimelineWhereInput } from "./TimelineWhereInput";
import { TimelineOrderByInput } from "./TimelineOrderByInput";

export type TimelineFindManyArgs = {
  where?: TimelineWhereInput;
  orderBy?: Array<TimelineOrderByInput>;
  skip?: number;
  take?: number;
};
