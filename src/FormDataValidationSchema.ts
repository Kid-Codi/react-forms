import * as yup from "yup";

import IFormData from "./IFormData";

export const formSchema: yup.ObjectSchema<IFormData> = yup.object({
	name: yup.string().required(),
	email: yup.string().required(),
	password: yup.string().matches(/^[a-zA-Z0-9]{8,}$/).min(8).required(),
	terms: yup.boolean().required().equals([true]),
}).defined();
