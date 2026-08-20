import axios from "axios";

export const instance = axios.create({
	baseURL: "https://biva-admin-server-production.up.railway.app",
	// https://biva-admin-server-production.up.railway.app
	withCredentials: true,
});
