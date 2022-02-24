import './categories.sass'
import { categoriesList } from '../../Constants/categoriesList'
import CategoryCard from '../CategoryCard/CategoryCard'

interface PropCategory {
	onClick(event: React.MouseEvent<HTMLDivElement>): void
}

const Categories = ({ onClick }: PropCategory) => {
	return (
		<>
			<div className="title-categories">
				<h3>Categorias</h3>
			</div>
			<div className="content-categories">
				{categoriesList.map((category) => (
					<CategoryCard
						key={category._id}
						image={category.img}
						text={category.text}
						type={category.type}
						onClick={onClick}
					/>
				))}
			</div>
		</>
	)
}
export default Categories
