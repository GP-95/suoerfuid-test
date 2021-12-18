import { Card, Avatar, Typography, Chip } from '@mui/material'
import { IProject, IState } from '../types/interfaces'
import style from '../styles/ProjectCard.module.css'
import { setCategory } from '../redux/actions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface IProps {
	project: IProject
	setCategory: (category: string) => void
}
function ProjectCard({ project, setCategory }: IProps) {
	const { name, description, categories } = project
	return (
		<Card className={style.card}>
			<div className={style.titleIconWrapper}>
				<Avatar alt={name} className={style.icon} />
				<Typography variant='h6' component='p'>
					{name}
				</Typography>
			</div>
			<Typography component='p' className={style.description}>
				{description}
			</Typography>
			<div className={style.chipsWrapper}>
				{categories.map((cat, i) => {
					if (i > 2) {
						return null
					}
					return (
						<Chip
							label={cat}
							className={resolveChipColor(cat)}
							key={`${name}_${cat}`}
							onClick={() => setCategory(cat)}
						/>
					)
				})}
			</div>
		</Card>
	)
}

function resolveChipColor(category: string) {
	switch (category) {
		case 'defi':
			return style.defi
		case 'nft':
			return style.nft
		case 'gaming':
			return style.gaming
		case 'dex':
			return style.dex
		case 'governance':
			return style.governance
		case 'logistics':
			return style.logistics
		default:
			return style.chip
	}
}
const mapStateToProps = (state: IState) => ({
	category: state.client.category,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setCategory: (cat: string) => dispatch(setCategory(cat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard)
