import { Card, Avatar, Typography, Chip, useMediaQuery } from '@mui/material'
import { ICategory, IProject, IState } from '../types/interfaces'
import style from '../styles/ProjectCard.module.css'
import { setCategory } from '../redux/actions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { categories } from '../utils/constants'
import Link from 'next/link'

interface IProps {
	project: IProject
	setCategory: (category: string) => void
}
function ProjectCard({ project, setCategory }: IProps) {
	const { name, description, categories, icon } = project

	const isMobile = !useMediaQuery('(min-width: 500px)')

	return (
		<Link href={`/project/${encodeURIComponent(name)}`}>
			<a>
				<Card className={style.card}>
					<div className={style.titleIconWrapper}>
						<Avatar
							src={icon}
							alt={name}
							className={style.icon}
							sx={{ width: 80, height: 80 }}
						/>
						<Typography variant='h6' component='p'>
							{name}
						</Typography>
					</div>
					<Typography component='p' className={style.description}>
						{description}
					</Typography>
					<div className={style.chipsWrapper}>
						{categories.map((cat: ICategory, i) => {
							if (i > 2) {
								return null
							}
							return (
								<Chip
									label={cat.category}
									style={{
										color: cat.textColor,
										backgroundColor: cat.color,
									}}
									key={`${name}_${cat.category}`}
									onClick={() => setCategory(cat.category)}
								/>
							)
						})}
					</div>
				</Card>
			</a>
		</Link>
	)
}

const mapStateToProps = (state: IState) => ({
	category: state.client.category,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setCategory: (cat: string) => dispatch(setCategory(cat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard)
