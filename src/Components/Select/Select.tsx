import React, { useState, useRef, useEffect } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { ISelectList } from '../../Interfaces/ISelectList'
import './select.sass'

interface PropsListSelect {
	valuesList: Array<ISelectList>
	initialValue: string
	selectValue(value: number): void
}

const Select = ({ valuesList, initialValue, selectValue }: PropsListSelect) => {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const [value, setValue] = useState<string>(initialValue)
	const [show, setShow] = useState<boolean>(false)

	const onClick = (event: React.MouseEvent<HTMLElement>) => {
		setValue(String(event.currentTarget.dataset.value))
		selectValue(Number(event.currentTarget.dataset.id))
		setShow(false)
	}

	useEffect(() => {
		function handleClickOutside(event: MouseEvent): void {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as HTMLElement)
			) {
				setShow(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [wrapperRef])

	return (
		<div
			className="content-select"
			onClick={() => setShow(true)}
			data-testid="select"
			ref={wrapperRef}
		>
			<div className="select-text">
				{value}
				<MdKeyboardArrowDown />
			</div>
			{show && (
				<ul className="select-value">
					{valuesList.map((item: ISelectList) => (
						<li
							key={item._id}
							data-value={item.value}
							data-id={item._id}
							onClick={onClick}
							role="menuitem"
						>
							{item.value}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
export default Select
