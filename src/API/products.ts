import { Product } from '../Interfaces/IProducts'
import { api } from './general'

export const getListProducts = async (limiter = 50): Promise<Product[]> => {
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
