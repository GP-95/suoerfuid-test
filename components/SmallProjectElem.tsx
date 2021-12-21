import { Avatar, Card, Typography } from '@mui/material'
import style from '../styles/SmallProjectElem.module.css'
import Link from 'next/link'
import { IProject } from '../types/interfaces'
import { useState } from 'react'

interface IProps {
	project: IProject
}

const defaultElevation = 3
const hoverElevation = 7

function SmallProjectElem({ project }: IProps) {
	const [elevation, setElevation] = useState(defaultElevation)
	const { name, icon } = project

	return (
		<Link href={`/project/${encodeURIComponent(name)}`}>
			<a>
				<Card
					elevation={elevation}
					className={style.card}
					onMouseEnter={() => setElevation(hoverElevation)}
					onMouseLeave={() => setElevation(defaultElevation)}>
					<Avatar src={icon} className={style.icon} />
					<Typography>{project.name}</Typography>
				</Card>
			</a>
		</Link>
	)
}

export default SmallProjectElem
