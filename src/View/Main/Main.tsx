import './main.sass'
import { useEffect, useState } from 'react'

import { getListProducts } from '../../API/products'
import Categories from '../../Components/Categories/Categories'
import ProductCard from '../../Components/PoductCard/ProductCard'
import { Product } from '../../Interfaces/IProducts'

const Main = () => {
	const [products, setProducts] = useState<Product[]>()

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await getListProducts()
			setProducts(response)
		}

		fetchProducts()
	}, [])

	return (
		<div className="content-main">
			<div className="categories">
				<Categories />
				<ul>
					<li>Produtos</li>
					<li>/</li>
					<li> Roupa Feminina </li>
				</ul>
			</div>

			<div className="list-products">
				{products?.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	)
}
export default Main
