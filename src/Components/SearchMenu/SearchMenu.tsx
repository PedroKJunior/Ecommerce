import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

import './searchMenu.sass'

interface InputProps {
	onInputChange(value: string): void
	onClick(): void
}

export const SearchMenu: React.FC<InputProps> = ({
	onInputChange,
	onClick,
}) => {
	const [value, setValue] = useState('')

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.currentTarget.value
		setValue(newValue)

		!!onInputChange && onInputChange(newValue)
	}

	return (
		<div className="search-menu">
			<input
				type="text"
				placeholder="Buscar Produtos"
				data-testid="input-search-item"
				onChange={onChange}
				value={value}
			/>
			<button onClick={onClick}>
				<MdSearch size={25} />
			</button>
		</div>
	)
}
