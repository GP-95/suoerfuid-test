import style from '../styles/FilterPanel.module.css'
import {
	pushCategory,
	popCategory,
	resetFilter,
	inputChange,
} from '../redux/actions'
import { Dispatch } from 'redux'
import { IState } from '../types/interfaces'
import { Button, Chip, TextField, Typography } from '@mui/material'
import { categories } from '../utils/constants'
import { connect } from 'react-redux'
import React, { ForwardedRef } from 'react'

interface IProps {
	innerRef: ForwardedRef<HTMLDivElement>
}

const mapStateToProps = (state: IState): IStateProps => ({
	activeFilters: state.client.filter,
	inputFilter: state.client.inputFilter,
})
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
	resetFilters: () => dispatch(resetFilter()),
	addCategory: (cat: string) => dispatch(pushCategory(cat)),
	removeCategory: (cat: string) => dispatch(popCategory(cat)),
	inputChange: (input: string) => dispatch(inputChange(input)),
})

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	IProps

const FilterPanel = (props: Props) => {
	const {
		resetFilters,
		addCategory,
		removeCategory,
		activeFilters,
		inputChange,
		inputFilter: input,
	} = props

	function handleChipClick(name: string): void {
		if (activeFilters.includes(name)) {
			return removeCategory(name)
		}
		return addCategory(name)
	}
	return (
		<div className={style.container} ref={props.innerRef}>
			<Typography variant='h4' component='h4' className={style.title}>
				Filter all projects
			</Typography>
			<TextField
				variant='filled'
				label='Search'
				className={style.input}
				value={input}
				onChange={(e) => inputChange(e.target.value)}
			/>
			<div className={style.chipsWrapper}>
				{categories.map((cat) => (
					<Chip
						label={cat.category}
						key={`f_cat_${cat.category}`}
						className={`${style.chip} ${
							activeFilters.includes(cat.category)
								? style[cat.category]
								: style.gray
						}`}
						onClick={() => handleChipClick(cat.category)}
					/>
				))}
			</div>
			<div className={style.resetWrapper}>
				<Button
					variant='contained'
					className={style.resetBtn}
					onClick={resetFilters}>
					Reset filters
				</Button>
			</div>
		</div>
	)
}

interface IStateProps {
	activeFilters: Array<string>
	inputFilter: string
}

interface IDispatchProps {
	resetFilters: () => void
	addCategory: (cat: string) => void
	removeCategory: (cat: string) => void
	inputChange: (cat: string) => void
}

export default connect<IStateProps, IDispatchProps, {}, IState>(
	mapStateToProps,
	mapDispatchToProps
)(FilterPanel)
