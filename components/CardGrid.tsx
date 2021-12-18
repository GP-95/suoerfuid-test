import { IProject } from '../types/interfaces'
import Card from './ProjectCard'
import style from '../styles/CardGrid.module.css'

interface IProps {
	projects: Array<IProject>
}

function CardGrid({ projects }: IProps) {
	return (
		<section className={style.grid}>
			{projects.map((project) => (
				<Card project={project} key={project.name} />
			))}
		</section>
	)
}

export default CardGrid
