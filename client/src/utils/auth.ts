import { createAuthClient } from "better-auth/react";
import { emailOTPClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
	baseURL: "https://biva-admin-server-production.up.railway.app/api/auth",
	// https://biva-admin-server-production.up.railway.app/api/auth
	fetchOptions: {
		credentials: "include",
	},
	plugins: [emailOTPClient()],
});
