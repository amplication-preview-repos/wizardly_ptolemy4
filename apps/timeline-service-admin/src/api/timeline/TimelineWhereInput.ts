import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TimelineWhereInput = {
  end?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  start?: IntNullableFilter;
};
