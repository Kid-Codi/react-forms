import { Label, TextField } from 'office-ui-fabric-react';

import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

const MavenTextField: ({ props, control, errors }) => React.ReactElement = ({ props, control, errors }): React.ReactElement => {
    return (
        <>
            <Label htmlFor={props.name}>{props.displayName}</Label>
            <Controller
                as={TextField}
                name={props.name}
                id={props.name}
                control={control}
                type={props.type}
                multiline={props.multiline}
            />
            <ErrorMessage errors={errors} name={props.name} />
        </>
    )
}

export default MavenTextField;