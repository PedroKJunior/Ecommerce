import './categories.sass'
import CategoryCard from '../CategoryCard/CategoryCard'
import { categoriesList } from './categoriesList'

const Categories = () => {
	return (
		<>
			<div className="title-categories">
				<h3>Categorias</h3>
				<hr />
			</div>
			<div className="content-categories">
				{categoriesList.map((category) => (
					<CategoryCard
						key={category._id}
						image={category.img}
						text={category.text}
					/>
				))}
			</div>
		</>
	)
}
export default Categories
