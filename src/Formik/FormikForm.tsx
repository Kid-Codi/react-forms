import { Checkbox, Label, PrimaryButton, TextField } from "office-ui-fabric-react";
import { ErrorMessage, Form, Formik } from "formik";

import IFormData from "../IFormData";
import React from "react";
import { formSchema } from "../FormDataValidationSchema";

const FormikForm: () => React.ReactElement = (): React.ReactElement => {
    return (
        <Formik<IFormData>
            initialValues={{
                name: '',
                email: '',
                password: '',
                terms: false
            }}
            validationSchema={formSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {(props) => (
                <Form style={{ padding: "10px" }}>
                    <Label htmlFor="name">Name</Label>
                    <TextField
                        name="name"
                        onChange={props.handleChange}
                        value={props.values.name}
                    />
                    <ErrorMessage name="name" />
                    <Label htmlFor="email">Email</Label>
                    <TextField
                        name="email"
                        type="email"
                        onChange={props.handleChange}
                        value={props.values.email}
                    />
                    <ErrorMessage name="email" />
                    <Label htmlFor="password">Password</Label>
                    <TextField
                        name="password"
                        type="password"
                        onChange={props.handleChange}
                        value={props.values.password}
                    />
                    <ErrorMessage name="password" />
                    <Label htmlFor="terms">Ts and Cs</Label>
                    <Checkbox
                        name="terms"
                        onChange={props.handleChange}
                        checked={props.values.terms}
                        styles={() => {
							return {
								root: {
									margin: "10px"
								}
							}
						}}
                    />
                    <ErrorMessage name="terms" />
                    <div>
                        <PrimaryButton type="submit">Register</PrimaryButton>
                    </div>
                </Form>
            )}
        </Formik>

    );
};

export default FormikForm;