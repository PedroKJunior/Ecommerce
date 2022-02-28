import './counter.sass'

interface PropsCounter {
	counter: number
	handleRemove(): void
	handleAdd(): void
	handleChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const Counter = ({
	handleRemove,
	handleAdd,
	handleChange,
	counter,
}: PropsCounter) => {
	return (
		<div className="content-counter">
			<button className="remove" onClick={handleRemove}>
				-
			</button>
			<input type="number" value={counter} onChange={handleChange} />
			<button className="add" onClick={handleAdd}>
				+
			</button>
		</div>
	)
}
export default Counter
