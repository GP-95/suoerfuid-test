import { Avatar, Button, Card, Typography } from '@mui/material'
import Link from 'next/link'
import style from '../styles/ProjectMainCard.module.css'
import { IProject } from '../types/interfaces'
import { resolveLinkIcon } from '../utils/functions'

interface IProps {
	project: IProject
}

function ProjectMainCard({ project }: IProps) {
	const { icon, name, description, url, socials } = project
	return (
		<Card elevation={7} className={style.card}>
			<Avatar src={icon} className={style.icon} />
			<Typography variant='h4' component='h1'>
				{name}
			</Typography>
			<div className={style.socialsWrapper}>
				{socials.map((social, i) => {
					const { icon, color } = resolveLinkIcon(social, 'medium')
					return (
						<Link href={social} key={`social_${i}_${color}`}>
							<a
								style={{ color: color }}
								className={style.social}>
								{icon}
							</a>
						</Link>
					)
				})}
			</div>
			<Typography
				variant='body1'
				component='p'
				className={style.description}>
				{description}
			</Typography>
			<Link href={url}>
				<a>
					<Button variant='contained' className={style.button}>
						Visit Webstite
					</Button>
				</a>
			</Link>
			<div className={style.sponsors}></div>
		</Card>
	)
}

export default ProjectMainCard
