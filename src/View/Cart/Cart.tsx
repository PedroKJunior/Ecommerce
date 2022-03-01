import React, { useEffect, useState } from 'react'
import { FaRegSadTear } from 'react-icons/fa'

import Counter from '../../Components/Counter/Counter'
import { cartContext } from '../../Store/CartContext'

import './cart.sass'

interface ModalProps {
	setShow(value: boolean): void
	id: number
}

interface IRatingCart {
	rate: number
	count: number
}

interface IProductCart {
	amount: number
	category: string
	description: string
	id: number
	image: string
	price: number
	rating: IRatingCart
	title: string
}

const ModalCart = ({ setShow, id }: ModalProps) => {
	const [product, setProduct] = useState<any>(null)
	const cart = cartContext()
	const handleYes = () => {
		cart.remove(id)
		setShow(false)
	}
	const handleNo = () => {
		setShow(false)
	}

	useEffect(() => {
		setProduct(cart.products.find((item) => item.id === id))
	}, [])

	return (
		<div className="content-modal-cart">
			{product && (
				<div className="box">
					<h2>Você deseja remover este item?</h2>
					<span>{product.title}</span>
					<div className="buttons">
						<button className="yes" onClick={handleYes}>
							Sim
						</button>
						<button className="no" onClick={handleNo}>
							Não
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

const Cart = () => {
	const [show, setShow] = useState<boolean>(false)
	const [products, setProducts] = useState<IProductCart[]>(null as any)
	const [remove, setRemove] = useState(null as any)
	const cart = cartContext()

	useEffect(() => {
		const amount = cart.products.map((product) =>
			Object.assign(product, { amount: 1 })
		)
		setProducts(amount)
	}, [cart.products])

	const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
		const id = Number(event.currentTarget.dataset.id)
		const auxArray = products.map((item) => {
			if (id === item.id) {
				if (item.amount > 1) item.amount = item.amount - 1
				else {
					setRemove(id)
					setShow(true)
				}
			}
			return item
		})
		setProducts(auxArray)
	}

	const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
		const id = Number(event.currentTarget.dataset.id)
		console.log(id)
		const auxArray = products.map((item) => {
			if (id === item.id) {
				item.amount = item.amount + 1
			}
			return item
		})
		setProducts(auxArray)
	}
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(event.target.value)
		const id = Number(event.currentTarget.dataset.id)
		if (value === 0) {
			setRemove(id)
			setShow(true)
		} else {
			const auxArray = products.map((item) => {
				if (id === item.id) {
					item.amount = value
				}
				return item
			})
			setProducts(auxArray)
		}
	}

	return (
		<div className="content-cart">
			{show && <ModalCart setShow={setShow} id={remove} />}
			{products &&
				(products.length === 0 ? (
					<div className="empty-cart">
						<FaRegSadTear size="30" /> Carrinho Vazio
					</div>
				) : (
					<ul>
						{products.map((product, index) => (
							<li key={product.id + index}>
								<div className="content-img">
									<img src={product.image} alt="" />
								</div>
								<h3>{product.title}</h3>
								<span>U$ {product.price}</span>
								<Counter
									product={product.id}
									counter={product.amount}
									handleAdd={handleAdd}
									handleRemove={handleRemove}
									handleChange={handleChange}
								/>
							</li>
						))}
					</ul>
				))}
		</div>
	)
}
export default Cart
