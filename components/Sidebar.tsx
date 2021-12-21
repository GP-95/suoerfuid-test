import { Paper, Typography } from '@mui/material'
import style from '../styles/Sidebar.module.css'
import { IProject } from '../types/interfaces'
import SmallProjectElem from './SmallProjectElem'

interface IProps {
	projects: Array<IProject>
}

function Sidebar({ projects }: IProps) {
	return (
		<div className={style.container}>
			<Typography variant='h5' component='h4' className={style.heading}>
				Explore related projects!
			</Typography>
			<Paper elevation={4} className={style.paper}>
				{projects.map((proj, i) => (
					<SmallProjectElem
						project={proj}
						key={`${proj.name}_sm_card_${i}`}
					/>
				))}
			</Paper>
		</div>
	)
}

export default Sidebar
