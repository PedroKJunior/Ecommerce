import { useEffect, useState } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'

import { getOneProduct } from '../../API/products'
import BarRating from '../../Components/Rating/BarRating'
import { Product } from '../../Interfaces/IProducts'
import './productView.sass'

const ProductView = () => {
	const [product, setProdutc] = useState<Product>()

	useEffect(() => {
		const fetchProduct = async () => {
			const response = await getOneProduct(2)
			setProdutc(response)
		}

		fetchProduct()
	}, [])

	return (
		<div className="content-product-view">
			<div
				className="content-image"
				style={{ backgroundImage: `url(${product?.image})` }}
			></div>
			<div className="container-informations">
				<div className="content-informations">
					<h3>{product?.title}</h3>
					<div className="rating">
						<span>{product?.rating.rate}</span>
						<BarRating value={product?.rating.rate || 0} />
						<div className="separator"></div>
						<span>{product?.rating.count} Avaliações</span>
					</div>
					<div className="price">U$ {product?.price}</div>
					<div className="description">{product?.description} </div>
					<div className="content-button">
						<button>
							<RiShoppingCartFill size={20} />
							Adicionar ao Carrinho
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProductView
