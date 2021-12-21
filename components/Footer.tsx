import style from '../styles/Footer.module.css'
import { resolveLinkIcon } from '../utils/functions'
import Link from 'next/link'
import { Container, Typography, useMediaQuery } from '@mui/material'

const socials = [
	'https://www.twitter.com',
	'https://www.youtube.com',
	'https://www.linkedin.com',
	'https://www.facebook.com',
]
function Footer() {
	const isMobile = !useMediaQuery('(min-width: 500px)')

	return (
		<footer className={style.footer}>
			<Container
				className={style.container}
				maxWidth={isMobile ? 'lg' : 'md'}>
				<ul className={style.menu}>
					<Link href='/about'>
						<a>
							<li>About us</li>
						</a>
					</Link>
					<Link href='/contact'>
						<a>
							<li>Contact</li>
						</a>
					</Link>
					<Link href='/careers'>
						<a>
							<li>Careers</li>
						</a>
					</Link>
					<Link href='/legal'>
						<a>
							<li>Legal</li>
						</a>
					</Link>
				</ul>
				<ul className={style.socials}>
					{socials.map((social, i) => {
						const icon = resolveLinkIcon(social, 'medium')
						if (!icon.icon || i > 4) {
							return null
						}
						return (
							<Link href={social} key={`footer_social_${i}`}>
								<a
									style={{ color: icon.color }}
									className={style.socialIcon}>
									{icon.icon}
								</a>
							</Link>
						)
					})}
				</ul>
			</Container>
			<Typography variant='body1' component='p' className={style.company}>
				Superfluid | 2021
			</Typography>
		</footer>
	)
}

export default Footer
