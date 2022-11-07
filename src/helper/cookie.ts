export const getCookie = (cookieName: string) => {
	const name = cookieName + '=';
	if (typeof document !== 'undefined') {
		const decodedCookie = decodeURIComponent(document.cookie);
		const cookieArr = decodedCookie.split('; ');
		let res;

		cookieArr.forEach((cookie) => {
			if (cookie.indexOf(name) === 0) res = cookie.substring(name.length);
		});
		console.log('RES', res);
		return res;
	}
};
