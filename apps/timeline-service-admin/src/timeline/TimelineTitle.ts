import { Timeline as TTimeline } from "../api/timeline/Timeline";

export const TIMELINE_TITLE_FIELD = "name";

export const TimelineTitle = (record: TTimeline): string => {
  return record.name?.toString() || String(record.id);
};
