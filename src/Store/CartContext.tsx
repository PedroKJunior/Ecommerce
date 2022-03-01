import { createContext, ReactNode, useContext, useState } from 'react'

import { Product } from '../Interfaces/IProducts'

interface IProviderContext {
	children: ReactNode
}

interface ICart {
	products: Array<Product>
	add(product: Product): void
	remove(id: number): void
}

const CartContext = createContext<ICart>(null as any)

export const CartContextProvider = ({ children }: IProviderContext) => {
	const [products, setProducts] = useState<Product[]>([])

	const add = (product: Product) => {
		const arrayAux = [...products]
		arrayAux.push(product)
		setProducts(arrayAux)
	}

	const remove = (id: number) => {
		const arrayAux = products.filter((items) => items.id !== id)
		setProducts(arrayAux)
	}

	return (
		<CartContext.Provider value={{ products, add, remove }}>
			{children}
		</CartContext.Provider>
	)
}

export const cartContext = () => useContext(CartContext)
