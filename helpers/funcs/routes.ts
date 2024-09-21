import { ERedirectSources } from "@/lib/types/components/shared";

export const handleRedirectedFrom = (
	from: string
): { [_key in ERedirectSources]: boolean } => {
	const modifiedFrom = from as ERedirectSources;

	return {
		resetPassword: modifiedFrom === "resetPassword",
		home: modifiedFrom === "home",
		signupSuccess: modifiedFrom === "signupSuccess",
		verifyAccount: modifiedFrom === "verifyAccount",
		verifyAccountFailure: modifiedFrom === "verifyAccountFailure",
	};
};
