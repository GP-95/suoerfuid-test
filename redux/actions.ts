import { IProject } from '../types/interfaces'
import { HYDRATE } from 'next-redux-wrapper'
export const setCategory = (category: string) => ({
	type: 'SET_CATEGORY',
	payload: { client: { category } },
})
export const pushCategory = (category: string) => ({
	type: 'PUSH_CATEGORY',
	payload: category,
})
export const popCategory = (category: string) => ({
	type: 'POP_CATEGORY',
	payload: category,
})
export const resetFilter = () => ({
	type: 'RESET_FILTER',
	payload: [],
})

export const inputChange = (input: string) => ({
	type: 'INPUT_CHANGE',
	payload: input,
})

export const hydrateProjects = (projects: Array<IProject>) => ({
	type: HYDRATE,
	payload: { server: { projects } },
})
