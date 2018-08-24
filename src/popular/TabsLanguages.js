import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
// import Tab from '@material-ui/core/Tab'
import R from 'ramda'
const log = R.tap(console.log)

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
const TabLanguages = props => {
  return (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
      <Tabs
        value={props.value}
        onChange={props.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {R.map(lang => (
          <Tab key={lang} label={lang} onClick={() => props.onSelect(lang)} />
        ))(languages)}
      </Tabs>
    </div>
  )
}

export default TabLanguages
