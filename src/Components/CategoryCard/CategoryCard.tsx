import './categoryCard.sass'

interface PropsCategoryCard {
	image: string
	text: string
	type: string
	onClick(event: React.MouseEvent<HTMLDivElement>): void
}

const CategoryCard = ({ image, text, type, onClick }: PropsCategoryCard) => {
	return (
		<div className="category-card" onClick={onClick} data-category={type}>
			<div
				className="image"
				style={{ backgroundImage: `url(${image})` }}
			/>
			<span>{text}</span>
		</div>
	)
}
export default CategoryCard
