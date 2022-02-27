import { IUser } from '../Interfaces/IUser'
import { api } from './general'

export const userLogin = async (user: IUser): Promise<any> => {
	try {
		const { data } = await api.post('/auth/login', JSON.stringify({
			username: user.user,
			password: user.password
		}))

		return data
	} catch (err) {
		return 'error'
	}
}