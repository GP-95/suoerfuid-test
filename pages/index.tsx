import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { Container, useMediaQuery } from '@mui/material'
import CardGrid from '../components/CardGrid'
import { connect } from 'react-redux'
import { IProject, IState } from '../types/interfaces'
import LatestHero from '../components/LatestHero'
import style from '../styles/Home.module.css'
import FilterPanel from '../components/FilterPanel'
import { projects } from '../utils/data'
import { Dispatch } from 'redux'
import { filterProjectCats } from '../utils/functions'
import Footer from '../components/Footer'
import { useRef } from 'react'

interface IStateProps {
	filters: Array<string>
	inputFilter: string
}

const mapStateToProps = (state: IState): IStateProps => ({
	filters: state.client.filter,
	inputFilter: state.client.inputFilter,
})

interface IDispatchProps {}

const mapDispatchToProps = (dispatch: Dispatch) => ({})

interface IProps {
	projects: Array<IProject>
}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapStateToProps> &
	IProps

const Home: NextPage<Props> = (props) => {
	const { projects, filters, inputFilter } = props

	const isMobile = useMediaQuery('(max-width: 500px)')

	const filtersRef = useRef<HTMLDivElement>(null)

	const featuredProjects = projects
		.filter((proj, i) => proj.featured)
		.filter((proj, i) => i <= 2)

	function scrollToSection() {
		if (filtersRef.current) {
			filtersRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}
	return (
		<div className={style.page}>
			<Container className={style.container}>
				<Head>
					<title>Superfluid Ecosystem</title>
					<meta
						name='description'
						content='Projects built on Superfluid'
					/>
					<link rel='icon' href='/favicon.ico' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/icon?family=Material+Icons'
					/>
				</Head>
				<LatestHero
					project={projects[0]}
					scrollClick={scrollToSection}
				/>
				<CardGrid projects={featuredProjects} title='Featured' />
				<FilterPanel innerRef={filtersRef} />
				<CardGrid
					projects={filterProjectCats(projects, filters, inputFilter)}
					containerStyle={style.mainGrid}
				/>
			</Container>
			<div className={style.background}></div>
			<div className={style.background2}></div>
			<Footer />
		</div>
	)
}

export default connect<IStateProps, IDispatchProps, {}, IState>(
	mapStateToProps,
	mapDispatchToProps
)(Home)

// Would get data from API
export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: { projects },
	}
}
