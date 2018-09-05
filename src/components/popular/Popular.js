import React from "react"
import { compose, withStateHandlers, lifecycle } from "recompose"
import LangMenu from "./LangMenu"
import { fetchPopularRepos } from "../../api"
import ReposGrid from "./ReposGrid"

const Popular = ({
	value,
	selected,
	repos,
	onChangeLanguage,
	onSelectLanguage
}) => {
	// console.log(value, selected, repos)
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}>
			<LangMenu
				value={value}
				selected={selected}
				handleChange={onChangeLanguage}
				onSelect={onSelectLanguage}
			/>
			<ReposGrid repos={repos} />
		</div>
	)
}

// Recompose...

const initialState = {
	value: 0,
	selected: "All",
	repos: []
}

const onDidMountAndUpdate = lifecycle({
	componentDidMount() {
		fetchPopularRepos(this.props.selected)
			.then(repos => {
				this.setState({
					repos
				})
			})
			.catch(e => console.log(e))
	},
	componentDidUpdate(prevProps) {
		if (this.props.selected !== prevProps.selected) {
			this.setState({ repos: [] })
			fetchPopularRepos(this.props.selected).then(repos => {
				this.setState({
					repos
				})
			})
		}
	}
})

const handleState = withStateHandlers(initialState, {
	onChangeLanguage: props => (event, value) => ({
		value
	}),
	onSelectLanguage: props => lang => ({
		selected: lang
	})
})

export default compose(
	handleState,
	onDidMountAndUpdate
)(Popular)
