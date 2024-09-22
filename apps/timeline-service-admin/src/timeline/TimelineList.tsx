import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TimelineList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Timelines"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="end" source="end" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="start" source="start" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
