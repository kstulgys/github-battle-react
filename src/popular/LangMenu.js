import React, { Fragment } from "react"
import { Tabs, Tab } from "@material-ui/core"
import * as R from "ramda"

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]

const TabList = ({ handleChange, value, onSelect }) => {
	// console.log(handleChange, value, onSelect)
	return (
		<Fragment>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered>
				{R.map(lang => (
					<Tab key={lang} label={lang} onClick={() => onSelect(lang)} />
				))(languages)}
			</Tabs>
		</Fragment>
	)
}

const TabListBase = ({ children }) => (
	<div style={{ marginTop: 100, marginBottom: 50 }}>{children}</div>
)

export default props => (
	<TabListBase>
		<TabList {...props} />
	</TabListBase>
)
