import { useEffect, useState } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'
import { useParams } from 'react-router-dom'

import { getOneProduct } from '../../API/products'
import Loading from '../../Components/Loading/Loading'
import BarRating from '../../Components/Rating/BarRating'
import { Product } from '../../Interfaces/IProducts'
import { cartContext } from '../../Store/CartContext'
import './productView.sass'

const ProductView = () => {
	const cart = cartContext()
	const [product, setProdutc] = useState<Product>(null as any)
	const { id = '1' } = useParams()

	useEffect(() => {
		const fetchProduct = async () => {
			const response = await getOneProduct(id)
			setProdutc(response)
		}

		fetchProduct()
	}, [id])

	const handleClick = () => {
		cart.add(product)
	}

	return (
		<>
			{product ? (
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
							<div className="description">
								{product?.description}{' '}
							</div>
							<div className="content-button">
								<button onClick={handleClick}>
									<RiShoppingCartFill size={20} />
									Adicionar ao Carrinho
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="loading">
					<Loading color="#2553e9" />
				</div>
			)}
		</>
	)
}
export default ProductView
