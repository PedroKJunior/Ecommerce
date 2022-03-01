import React, { useEffect, useState } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { cartContext } from '../../Store/CartContext'
import { SearchMenu } from '../SearchMenu/SearchMenu'

import './mainMenu.sass'

const MainMenu: React.FC = () => {
	const [item, setItem] = useState<string>('')
	const { products } = cartContext()
	const [length, setLength] = useState(0)

	useEffect(() => {
		setLength(products.length)
	}, [products])

	const handleChange = (value: string) => {
		console.log(value)
	}

	const searchItem = () => {
		console.log(item)
	}

	return (
		<div className="main-menu">
			<Link to="/products">
				<h1 className="logo">Magazine</h1>
			</Link>
			<SearchMenu onClick={searchItem} onInputChange={handleChange} />
			<Link to="/cart" className="shopping-cart">
				<RiShoppingCartFill size={25} />
				<span className="amount">{length}</span>
			</Link>
		</div>
	)
}
export default MainMenu
