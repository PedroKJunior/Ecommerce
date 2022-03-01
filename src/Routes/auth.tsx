export const isAuthenticated = () =>
	JSON.parse(localStorage.getItem('auth') || 'false')
