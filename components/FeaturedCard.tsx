import { Avatar, Button, Paper, Typography } from '@mui/material'
import { IProject } from '../types/interfaces'
import style from '../styles/FeaturedCard.module.css'
import Link from 'next/link'
import { resolveLinkIcon } from '../utils/functions'

interface IProps {
	project: IProject
}

function FeaturedCard({ project }: IProps) {
	const { name, description, icon, socials } = project
	return (
		<Paper elevation={3} className={style.container}>
			<div className={style.iconNameWrapper}>
				<Avatar
					src={icon}
					sx={{ width: 80, height: 80 }}
					className={style.icon}
				/>
				<div className={style.nameSocialsWrapper}>
					<Typography
						variant='h6'
						component='h6'
						className={style.name}>
						{name}
					</Typography>
					<div className={style.socialsWrapper}>
						{socials.map((social, i) => {
							const icon = resolveLinkIcon(social)
							if (!icon.icon || i > 4) {
								return null
							}
							return (
								<Link
									href={social}
									key={`social_$${name}_${i}`}>
									<a
										style={{ color: icon.color }}
										className={style.socialIcon}>
										{icon.icon}
									</a>
								</Link>
							)
						})}
					</div>
				</div>
			</div>
			<Typography
				variant='body1'
				component='p'
				className={style.description}>
				{description}
			</Typography>
			<a
				href={`/project/${encodeURIComponent(name)}`}
				className={style.readMore}>
				<Button>Read More</Button>
			</a>
		</Paper>
	)
}

export default FeaturedCard
