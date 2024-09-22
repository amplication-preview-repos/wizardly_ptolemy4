import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TimelineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="end" source="end" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="start" source="start" />
      </SimpleForm>
    </Edit>
  );
};
