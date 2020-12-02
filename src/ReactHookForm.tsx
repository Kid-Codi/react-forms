import { Checkbox, Label, PrimaryButton, TextField } from 'office-ui-fabric-react';
import { Controller, useForm, useWatch } from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";
import IFormData from "./IFormData";
import MavenCheckbox from './Common/MavenCheckbox';
import MavenTextField from './Common/MavenTextField';
import React from "react";
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import UseFieldArrayTest from './UseFieldArrayTest';
import { formSchema } from "./FormDataValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

// useWatch: Behaves similarly to the watch API, however, this will isolate re-rendering at the component level 
// and potentially result in better performance for your application.
// This can be used to watch the Country/Region option, whenever it changes,
// Fetch and populate the State/Province DropDown with returned options.
const IsolateReRender: ({ control }: any) => React.ReactElement | null = ({ control }) => {
	const value = useWatch({
		control,
		name: 'password', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
		defaultValue: '' // default value before the render
	});

	console.log(value);
	// return value.length > 4 ? <TextField value={value} /> : null;
	return <Controller
		render={props => <TextField
			type="text"
			readOnly={true}
			disabled={true}
			value={value}
		// onChange={(e, v) => props.onChange(value)}
		/>}
		name="stuff"
		control={control}
	/>; // only re-render at the component level, when password changes
}

const ReactHookForm: () => React.ReactElement = (): React.ReactElement => {
	// The difference between watch and getValues is that getValues will not trigger re-renders or subscribe to input changes.
	const { handleSubmit, getValues, watch, register, control, errors } = useForm<IFormData>({
		mode: "onSubmit",
		reValidateMode: "onBlur",
		defaultValues: {
			name: "",
			email: "",
			password: "",
			terms: false,
			friends: [{ firstName: "Joe" }, { firstName: "Bill" }]
		},
		resolver: yupResolver(formSchema)
	});

	const bar = (value: string) => {
		if (value === "akeem") {
			alert(`Hello ${value}`);
		}
	};

	// getValues will not trigger re-renders or subscribe to input changes.
	const nameValues = getValues(["name", "email"]);
	bar(nameValues["email"]);

	// watch triggers re-renders of whole form when value of input changes, e.g. on keystroke, might be ok for a Country/Region dropdown.
	const nameWatch = watch("name");
	bar(nameWatch);

	// For auto save. rehydration not needed.
	// const foo = () => setInterval(() => {
	// 	// getValues will return form values at moment it is called.
	// 	console.log(JSON.stringify(getValues(), null, 2));
	// }, 10000);
	// foo();

	// Time out.
	const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

	return (
		<form onSubmit={handleSubmit(async formData => {
			// await sleep(2000);
			setTimeout(() => {
				alert(JSON.stringify(formData, null, 2));
			}, 400);
		})}>
			<Stack style={{ padding: "10px" }}>
				<MavenTextField control={control} errors={errors} props={{ name: "name", displayName: "Name", type: "text" }} />
				<MavenTextField control={control} errors={errors} props={{ name: "email", displayName: "Email", type: "email" }} />
				<MavenTextField control={control} errors={errors} props={{ name: "password", displayName: "Password", type: "password" }} />
				<MavenTextField control={control} errors={errors} props={{ name: "description", displayName: "Description", type: "text", multiline: true }} />
				<MavenCheckbox control={control} errors={errors} props={{ name: "terms", displayName: "Ts & Cs" }} />
				<IsolateReRender control={control} />
				<UseFieldArrayTest control={control} register={register} />
				<PrimaryButton type="submit">Register</PrimaryButton>
			</Stack>
		</form >
	);
};

export default ReactHookForm;