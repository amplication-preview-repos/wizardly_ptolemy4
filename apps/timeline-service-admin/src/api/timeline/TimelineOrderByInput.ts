import { SortOrder } from "../../util/SortOrder";

export type TimelineOrderByInput = {
  createdAt?: SortOrder;
  end?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  start?: SortOrder;
  updatedAt?: SortOrder;
};
