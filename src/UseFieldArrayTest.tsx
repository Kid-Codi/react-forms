import { ActionButton, DefaultButton, IconButton, Label, TextField } from "office-ui-fabric-react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";

import React from "react";

const UseFieldArrayTest: ({ control, register }) => React.ReactElement = ({ control, register }): React.ReactElement => {
    // const { control, register } = useForm();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "friends", // unique name for your Field Array
        // keyName: "id", default to "id", you can change the key name
    });

    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
            {console.log(fields)}
            {fields.filter(Boolean).map((field, index) => (
                <div key={field.id} >
                    <Label htmlFor={`friends[${index}].firstName`}>{`Friend no.: ${++index}`}</Label>
                    <div style={{ display: "flex" }}>
                        <Controller
                            as={TextField}
                            // label={`Friend no.: ${++index}`}
                            name={`friends[${index}].firstName`}
                            control={control}
                            defaultValue={field.firstName}
                        />
                        <IconButton onClick={() => remove(index)} iconProps={{ iconName: "delete" }} />
                    </div>
                </div>
            ))}
            <div>
                <IconButton onClick={() => remove()} iconProps={{ iconName: "dependencyRemove" }} />
                <IconButton onClick={() => append({ firstName: "" })} iconProps={{ iconName: "calculatorAddition" }} />
            </div>
        </div>
    );
}

export default UseFieldArrayTest;