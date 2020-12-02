export default interface FormData {
	name: string;
	email: string;
	password: string;
	terms: boolean;
	friends?: {
		firstName:
		string
	}[];
};