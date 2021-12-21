import { Container, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	NextPage,
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { IState, IProject } from '../../types/interfaces'
import { projects } from '../../utils/data'
import style from '../../styles/ProjectPage.module.css'
import { wrapper } from '../../redux/store'
import { hydrateProjects } from '../../redux/actions'
import Sidebar from '../../components/Sidebar'
import ProjectMainCard from '../../components/ProjectMainCard'
import { useRouter } from 'next/router'
type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapStateToProps> &
	IProps

interface IProps {
	pageProject: IProject
}

interface IStateProps {
	serverProjects: Array<IProject>
}

const mapStateToProps = (state: IState): IStateProps => ({
	serverProjects: state.server.projects,
})

interface IDispatchProps {}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({})

const ProjectPage: NextPage<Props> = (props) => {
	const { pageProject: project, serverProjects: projects } = props

	const router = useRouter()

	return (
		<div className={style.wrapper}>
			<Container className={style.container}>
				<Sidebar projects={projects} />
				<ProjectMainCard project={project} />
			</Container>
			<div className={style.backBtn} onClick={() => router.back()}>
				<ArrowBackIcon className={style.backArrow} />
			</div>
		</div>
	)
}

export default connect<IStateProps, IDispatchProps, {}, IState>(
	mapStateToProps,
	mapDispatchToProps
)(ProjectPage)

// Get path data from API
export const getStaticPaths: GetStaticPaths = async () => {
	const paths = projects.map((proj) => ({
		params: {
			project: encodeURIComponent(proj.name),
		},
	}))

	return { paths, fallback: false }
}

interface IParams extends ParsedUrlQuery {
	project: string
}

// This would also get data from API
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
	(store) => async (ctx: GetStaticPropsContext) => {
		const { project } = ctx.params as IParams
		console.log(ctx)

		const pageProject = projects.filter(
			(proj) => encodeURIComponent(proj.name) === project
		)

		const relatedProjects = projects.filter((proj) =>
			proj.categories.some(
				(cat) =>
					pageProject[0].categories.includes(cat) &&
					proj.name !== pageProject[0].name
			)
		)

		store.dispatch(hydrateProjects(relatedProjects))

		return {
			props: {
				pageProject: pageProject[0],
			},
		}
	}
)
