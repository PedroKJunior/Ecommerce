import { MdGrade, MdOutlineGrade } from 'react-icons/md'
import './barRating.sass'

interface PropsBarRating {
	value: number
}

const BarRating = ({ value }: PropsBarRating) => {
	return (
		<ul className="bar-rating">
			<li>
				{value >= 1 ? (
					<MdGrade size={25} />
				) : (
					<MdOutlineGrade size={25} />
				)}
			</li>
			<li>
				{value >= 2 ? (
					<MdGrade size={25} />
				) : (
					<MdOutlineGrade size={25} />
				)}
			</li>
			<li>
				{value >= 3 ? (
					<MdGrade size={25} />
				) : (
					<MdOutlineGrade size={25} />
				)}
			</li>
			<li>
				{value >= 4 ? (
					<MdGrade size={25} />
				) : (
					<MdOutlineGrade size={25} />
				)}
			</li>
			<li>
				{value === 5 ? (
					<MdGrade size={25} />
				) : (
					<MdOutlineGrade size={25} />
				)}
			</li>
		</ul>
	)
}
export default BarRating
