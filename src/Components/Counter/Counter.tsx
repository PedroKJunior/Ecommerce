import './counter.sass'

interface PropsCounter {
	product: number
	counter: number
	handleRemove(event: React.MouseEvent<HTMLButtonElement>): void
	handleAdd(event: React.MouseEvent<HTMLButtonElement>): void
	handleChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const Counter = ({
	handleRemove,
	handleAdd,
	handleChange,
	counter,
	product,
}: PropsCounter) => {
	return (
		<div className="content-counter">
			<button className="remove" onClick={handleRemove} data-id={product}>
				-
			</button>
			<input
				type="number"
				value={counter}
				onChange={handleChange}
				data-id={product}
			/>
			<button className="add" onClick={handleAdd} data-id={product}>
				+
			</button>
		</div>
	)
}
export default Counter
