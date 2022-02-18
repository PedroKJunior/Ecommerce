import './categoryCard.sass'

interface PropsCategoryCard {
	image: string
	text: string
}

const CategoryCard = ({ image, text }: PropsCategoryCard) => {
	return (
		<div className="category-card">
			<div
				className="image"
				style={{ backgroundImage: `url(${image})` }}
			/>
			<span>{text}</span>
		</div>
	)
}
export default CategoryCard
