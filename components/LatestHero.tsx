import { ArrowDownward } from '@mui/icons-material'
import { Button, Paper, Typography } from '@mui/material'
import FeaturedCard from './FeaturedCard'
import style from '../styles/LatestHero.module.css'
import { IProject } from '../types/interfaces'

interface IProps {
	project: IProject
	scrollClick: () => void
}

function LatestHero(props: IProps) {
	const { project, scrollClick } = props
	return (
		<div className={style.container}>
			<div className={style.info}>
				<Typography component='h1' variant='h3' className={style.title}>
					Take a look at the Superfluid ecosystem!
				</Typography>
				<Paper elevation={4} className={style.infoPaper}>
					<Typography component='p' className={style.infoText}>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Officia omnis dolore hic beatae neque dolores quis
						libero quae perspiciatis!
					</Typography>
					<div className={style.btnWrapper}>
						<Button
							variant='contained'
							className={style.exploreBtn}
							onClick={scrollClick}>
							explore
							<ArrowDownward className={style.icon} />
						</Button>
						<Button variant='outlined' className={style.joinBtn}>
							Join us!
						</Button>
					</div>
				</Paper>
			</div>
			<div className={style.latest}>
				<Typography
					variant='h5'
					component='h2'
					className={style.meetTitle}>
					Meet our latest member
				</Typography>
				<FeaturedCard project={project} />
			</div>
		</div>
	)
}

export default LatestHero
