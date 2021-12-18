import { AnyAction } from 'redux'

export interface IState {
	server: IServerState
	client: IClientState
}

export interface IServerState {
	region: string
	projects: Array<IProject>
}

export interface IClientState {
	category: string
}

export interface IProject {
	name: string
	description: string
	icon: string
	url: string
	categories: Array<string>
	featured: boolean
}
