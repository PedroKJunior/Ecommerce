import { Product } from '../Interfaces/IProducts'

export const lowestPrice = (a: Product, b: Product) => a.price - b.price

export const biggestPrice = (a: Product, b: Product) => b.price - a.price

export const bestRated = (a: Product, b: Product) => {
	console.log(a)
	return a.rating.rate - b.rating.rate
}
