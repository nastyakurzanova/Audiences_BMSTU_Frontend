import Cookies from "universal-cookie";

export function useToken() {
	const cookies = new Cookies()
	console.log('cookies access_token:', cookies);
	const access_token = cookies.get("access_token");

	const setAccessToken = (value: any) => {
		cookies.set("access_token", value, {path: '/AudiencesBMSTU', expires: new Date(Date.now()+25920000)})
	}

	const resetAccessToken = () => {
		cookies.set("access_token", undefined, {path: '/AudiencesBMSTU', expires: new Date(Date.now()+25920000)})
	}

	return {
		access_token,
		setAccessToken,
		resetAccessToken
	};
}