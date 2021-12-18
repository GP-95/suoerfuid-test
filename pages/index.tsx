import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { Container } from '@mui/material'
import CardGrid from '../components/CardGrid'
import { connect } from 'react-redux'
import { IState } from '../types/interfaces'

const projects = [
	{
		categories: ['gaming', 'nft'],
		name: 'Test1',
		url: 'ada',
		featured: false,
		icon: 'https://url.com',
		description:
			'This is a very long test description to see how this description will be displayed on both cards and the larger pop-up or page as well. 12329jtd98gh',
	},
	{
		categories: ['defi', 'dex'],
		name: 'Test2',
		url: 'ada',
		featured: false,
		icon: 'https://url.com',
		description:
			'This is a very long test description to see how this description will be displayed on both cards and the larger pop-up or page as well. 12329jtd98gh',
	},
	{
		categories: ['gaming', 'logistics'],
		name: 'Test3',
		url: 'ada',
		featured: false,
		icon: 'https://url.com',
		description:
			'This is a very long test description to see how this description will be displayed on both cards and the larger pop-up or page as well. 12329jtd98gh',
	},
	{
		categories: ['defi', 'gaming'],
		name: 'Test4',
		url: 'ada',
		featured: false,
		icon: 'https://url.com',
		description:
			'This is a very long test description to see how this description will be displayed on both cards and the larger pop-up or page as well. 12329jtd98gh',
	},
	{
		categories: ['governance'],
		name: 'Test5',
		url: 'ada',
		featured: false,
		icon: 'https://url.com',
		description:
			'This is a very long test description to see how this description will be displayed on both cards and the larger pop-up or page as well. 12329jtd98gh',
	},
	{
		categories: ['nft', 'logistics'],
		name: 'Test6',
		url: 'ada',
		featured: false,
		icon: 'https://url.com',
		description:
			'This is a very long test description to see how this description will be displayed on both cards and the larger pop-up or page as well. 12329jtd98gh',
	},
	{
		categories: ['gaming', 'logistics', 'dex', 'nft', 'defi'],
		name: 'Test7',
		url: 'ada',
		featured: false,
		icon: 'https://url.com',
		description:
			'This is a very long test description to see how this description will be displayed on both cards and the larger pop-up or page as well. 12329jtd98gh',
	},
]

const mapStateToProps = (state: IState) => {
	return {}
}

const mapDispatchToProps = {}

const Home: NextPage = (props) => {
	return (
		<Container>
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
			<CardGrid projects={projects} />
		</Container>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: { projects },
	}
}
