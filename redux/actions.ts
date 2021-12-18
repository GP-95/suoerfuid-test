import { Dispatch } from 'redux'
export const setCategory = (category: string) => ({
	type: 'SET_CATEGORY',
	payload: { client: { category } },
})
