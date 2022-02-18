import { api } from './general'

interface Rating {
	rate: number
	count: number
}

interface Product {
	id: number
	title: string
	price: number
	category: string
	description: string
	image: string
	rate: Rating
}

export const getListProducts = async (limiter = 10): Promise<Product[]> => {
	const { data } = await api.get(`/products?limit=${limiter}`)
	return data
}

export const getOneProduct = async (id: number): Promise<Product> => {
	const { data } = await api.get(`/products/${id}`)
	return data
}

export const getSortProducts = async (sort = 'desc'): Promise<Product[]> => {
	const { data } = await api.get(`/products?sort=${sort}`)
	return data
}
