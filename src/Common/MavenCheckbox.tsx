import { Checkbox, Label } from 'office-ui-fabric-react';

import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

const MavenCheckbox: ({ props, control, errors }) => React.ReactElement = ({ props, control, errors }): React.ReactElement => {
    return (
        <>
            <Label htmlFor={props.name}>{props.displayName}</Label>
            <Controller
                name={props.name}
                id={props.name}
                control={control}
                render={props => <Checkbox
                    checked={props.value}
                    onChange={(e, checked) => props.onChange(checked)}
                    styles={() => {
                        return {
                            root: {
                                margin: "10px"
                            }
                        }
                    }}
                />}
            />
            <ErrorMessage errors={errors} name={props.name} />
        </>
    )
}

export default MavenCheckbox;
