import { IUser } from '../Interfaces/IUser'

export const userLogin = async (user: IUser): Promise<any> => {
	return new Promise((resolve) =>
		setTimeout((i = 0) => {
			if (user.user === 'living_teste' && user.password === 'living') {
				localStorage.setItem('auth', JSON.stringify(true))
				resolve(true)
			} else {
				resolve('error')
			}
		}, 5000)
	)
}