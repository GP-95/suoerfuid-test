import { IState } from '../types/interfaces'

import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

export function reducer(
	state: IState = {
		server: { region: 'EST', projects: [] },
		client: { category: 'nft' },
	},
	action: AnyAction
) {
	const { type, payload } = action

	switch (type) {
		case HYDRATE:
			return { ...state, server: { ...state.server, ...payload.server } }
		case 'SET_CATEGORY':
			return { ...state, client: { ...state.client, ...payload.client } }
		default:
			return state
	}
}
