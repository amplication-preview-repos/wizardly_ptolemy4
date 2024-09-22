import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TimelineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="end" source="end" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="start" source="start" />
      </SimpleForm>
    </Create>
  );
};
