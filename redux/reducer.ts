import { IState } from '../types/interfaces'

import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

export function reducer(
	state: IState = {
		server: { projects: [] },
		client: { category: 'NFT', filter: [], inputFilter: '' },
	},
	action: AnyAction
): IState {
	const { type, payload } = action

	switch (type) {
		case HYDRATE:
			return { ...state, server: { ...state.server, ...payload.server } }
		case 'SET_CATEGORY':
			return { ...state, client: { ...state.client, ...payload.client } }
		case 'PUSH_CATEGORY':
			if (state.client.filter.includes(payload)) {
				return { ...state }
			}
			return {
				...state,
				client: {
					...state.client,
					filter: [...state.client.filter, payload],
				},
			}
		case 'POP_CATEGORY':
			return {
				...state,
				client: {
					...state.client,
					filter: [
						...state.client.filter.filter((cat) => cat !== payload),
					],
				},
			}
		case 'RESET_FILTER':
			return {
				...state,
				client: { ...state.client, filter: payload, inputFilter: '' },
			}

		case 'INPUT_CHANGE':
			return {
				...state,
				client: { ...state.client, inputFilter: payload },
			}
		default:
			return state
	}
}
