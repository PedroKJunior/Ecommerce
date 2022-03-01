import './main.sass'
import React, { useEffect, useState } from 'react'

import { getListProducts } from '../../API/products'
import Categories from '../../Components/Categories/Categories'
import Loading from '../../Components/Loading/Loading'
import ProductCard from '../../Components/PoductCard/ProductCard'
import Select from '../../Components/Select/Select'
import { ProductOrder } from '../../Constants/ProductOrder'
import { Product } from '../../Interfaces/IProducts'
import { lowestPrice, biggestPrice, bestRated } from '../../Shared/sortedMethod'

const Main = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [category, setCategory] = useState<string>('todos')

	useEffect(() => {
		const fetchProducts = async (category: string) => {
			const response = await getListProducts(category)
			setProducts(response)
		}

		fetchProducts(category)
	}, [category])

	const handleClickCategory = (event: React.MouseEvent<HTMLDivElement>) => {
		setCategory(String(event.currentTarget.dataset.category))
	}

	const handleAllProducts = () => {
		if (category !== 'todos') setCategory('todos')
	}

	const selectOrder = (value: number) => {
		const methodSortedProducts = (a: Product, b: Product) => {
			if (value === 3) return bestRated(a, b)
			if (value === 2) return biggestPrice(a, b)
			return lowestPrice(a, b)
		}

		const clonedProducts = [...products]
		const sortedProducts = clonedProducts?.sort((a, b) =>
			methodSortedProducts(a, b)
		)
		setProducts(sortedProducts)
	}

	return (
		<div className="content-main">
			<div className="header">
				<div className="categories">
					<Categories onClick={handleClickCategory} />
					<ul>
						<li
							onClick={handleAllProducts}
							className={`${category !== 'todos' && 'active'}`}
						>
							Produtos
						</li>
						<li>/</li>
						<li> {category} </li>
					</ul>
				</div>
				<Select
					valuesList={ProductOrder}
					initialValue={'Filtrar por'}
					selectValue={selectOrder}
				/>
			</div>

			<div className="list-products">
				{products.length === 0 ? (
					<Loading color="#2553e9" />
				) : (
					products.map((product) => {
						return (
							<ProductCard product={product} key={product.id} />
						)
					})
				)}
			</div>
		</div>
	)
}
export default Main
