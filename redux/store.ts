import { createStore, Store, AnyAction, Reducer } from 'redux'
import { createWrapper, Context, MakeStore } from 'next-redux-wrapper'
import { reducer } from './reducer'
import { IState } from '../types/interfaces'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState: IState = {
	client: { category: '', filter: [], inputFilter: '' },
	server: { projects: [] },
}

const configureStore = (initialState: IState) => {
	const composedEnhancers = composeWithDevTools()
	const store = createStore(reducer, initialState, composedEnhancers)
	return store
}

const makeStore: MakeStore<Store<IState>> = (ctx: Context) =>
	configureStore(initialState)

export const wrapper = createWrapper<Store<IState>>(makeStore, { debug: true })
