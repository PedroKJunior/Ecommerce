import React, { useState, useRef, useEffect } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { useToggle } from '../../hook/useToggle'
import { IProductOrder } from '../../Interfaces/IProductOrder'
import './select.sass'

interface PropsListOrderProduct {
	productOrderList: Array<IProductOrder>
	initialOrder: string
	selectOrder(value: number): void
}

const Select = ({
	productOrderList,
	initialOrder,
	selectOrder,
}: PropsListOrderProduct) => {
	const wrapperRef = useRef<HTMLDivElement>(null)
	const [value, setValue] = useState<string>(initialOrder)
	const [show, setShow] = useToggle(false)

	const onClick = (event: React.MouseEvent<HTMLElement>) => {
		setValue(String(event.currentTarget.dataset.value))
		selectOrder(Number(event.currentTarget.dataset.id))
		setShow()
	}

	useEffect(() => {
		function handleClickOutside(event: MouseEvent): void {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as HTMLElement)
			) {
				setShow()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [wrapperRef])

	return (
		<div className="content-select" ref={wrapperRef} data-testid="select">
			<div className="select-text" onClick={setShow}>
				{value}
				<MdKeyboardArrowDown />
			</div>
			{show && (
				<ul className="select-value">
					{productOrderList.map((item: IProductOrder) => (
						<li
							key={item._id}
							data-value={item.value}
							data-id={item._id}
							onClick={onClick}
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
