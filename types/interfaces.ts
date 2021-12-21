import { AnyAction } from 'redux'

export interface IState {
	server: IServerState
	client: IClientState
}

export interface IServerState {
	projects: Array<IProject>
}

export interface IClientState {
	category: string
	filter: Array<string>
	inputFilter: string
}

export interface IProject {
	name: string
	description: string
	icon: string
	url: string
	categories: Array<ICategory>
	featured: boolean
	socials: Array<string>
}

export interface ICategory {
	category: string
	color: string
	textColor: string
}
