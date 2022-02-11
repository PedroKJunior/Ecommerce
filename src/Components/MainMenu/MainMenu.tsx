import React, { useState } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'

import Logo from '../../Images/Logo.svg'
import { SearchMenu } from '../SearchMenu/SearchMenu'

import './mainMenu.sass'

const MainMenu: React.FC = () => {
	const [item, setItem] = useState<string>('')

	const handleChange = (value: string) => {
		console.log(value)
	}

	const searchItem = () => {
		console.log(item)
	}

	return (
		<div className="main-menu">
			<img src={Logo} alt="Cubic Magazine" className="logo" />
			<SearchMenu onClick={searchItem} onInputChange={handleChange} />
			<div className="shopping-cart">
				<RiShoppingCartFill size={25} />
				<span className="amount">{0}</span>
			</div>
		</div>
	)
}
export default MainMenu
