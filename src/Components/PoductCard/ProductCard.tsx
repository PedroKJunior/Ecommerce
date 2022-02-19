import { useEffect, useState } from 'react'

import './productCard.sass'
import { Product } from '../../Interfaces/IProducts'

interface PropsProduct {
	product: Product
}

const ProductCard = ({ product }: PropsProduct) => {
	const [name, setName] = useState<string>('')

	useEffect(() => {
		if (product?.title) {
			const title = product.title.split(' ')
			setName(title[0])
		}
	}, [product])
	return (
		<div className="product-card">
			<div className="card-body">
				<img src={product?.image} alt="" />
				<h4 className="title">{name}</h4>
				<span className="price">U$ {product?.price}</span>
				<div className="animation">
					<p className="description">{product?.description}</p>
					<a>Ver mais</a>
				</div>
			</div>
		</div>
	)
}
export default ProductCard
