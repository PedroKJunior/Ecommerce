import { api } from './general'

export const getListProducts = async (
	category = 'todos',
	limiter = 50
): Promise<any> => {

	try {

		if (category === 'todos') {
			const { data } = await api.get(`/products?limit=${limiter}`)
			return data
		}
		const { data } = await api.get(
			`/products/category/${encodeURIComponent(category)}`
		)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const getOneProduct = async (id: string): Promise<any> => {
	try {
		const { data } = await api.get(`/products/${id}`)
		return data
	}
	catch (error) {
		console.error(error)
	}
}
