import { IProject } from '../types/interfaces'
import Card from './ProjectCard'
import style from '../styles/CardGrid.module.css'
import { Paper, Typography } from '@mui/material'

interface IProps {
	projects: Array<IProject>
	title?: string
	containerStyle?: string
}

function CardGrid({ projects, title, containerStyle = '' }: IProps) {
	return (
		<div className={containerStyle}>
			{title ? <h1 className={style.title}>{title}</h1> : null}
			<section
				className={`${projects.length ? style.grid : style.center} ${
					!title ? style.topStyle : null
				}`}>
				{projects.length ? (
					projects.map((project) => (
						<Card project={project} key={project.name} />
					))
				) : (
					<Paper elevation={5} className={style.notFound}>
						<Typography className={style.notFoundText}>
							<p>Uh-oh!</p>{' '}
							<p>Looks like we found no projects.</p>
						</Typography>
					</Paper>
				)}
			</section>
		</div>
	)
}

export default CardGrid
