import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import { ICategory, IProject } from '../types/interfaces'

export interface IColorIcon {
	icon: JSX.Element | boolean
	color?: string
}

export function resolveLinkIcon(
	url: string,
	size: 'small' | 'inherit' | 'medium' | 'large' | undefined = undefined
): IColorIcon {
	switch (true) {
		case url.includes('www.twitter.com'):
			return { icon: <TwitterIcon fontSize={size} />, color: '#1DA1F2' }
		case url.includes('www.linkedin.com'):
			return { icon: <LinkedInIcon fontSize={size} />, color: '#2867b2' }
		case url.includes('www.youtube.com'):
			return { icon: <YouTubeIcon fontSize={size} />, color: '#FF0000' }
		case url.includes('www.facebook.com'):
			return { icon: <FacebookIcon fontSize={size} />, color: '#4267B2' }
		default:
			return { icon: false }
	}
}

export function filterProjectCats(
	projects: Array<IProject>,
	filters: Array<string>,
	searchPhrase: string = ''
): Array<IProject> {
	if (!filters.length && !searchPhrase) {
		return projects
	}
	if (filters.length && !searchPhrase) {
		return projects.filter(({ categories }: IProject) =>
			filters.every((filter) =>
				categories.map((cat) => cat.category).includes(filter)
			)
		)
	}

	const filteredByCat = projects.filter(({ categories }: IProject) =>
		filters.every((filter) =>
			categories.map((cat) => cat.category).includes(filter)
		)
	)

	const lowerCaseInput = searchPhrase.toLocaleLowerCase()

	return filteredByCat.filter(
		({ name, description }) =>
			name.toLowerCase().includes(lowerCaseInput) ||
			description.toLowerCase().includes(lowerCaseInput)
	)
}
