import React from 'react'
// import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const TabLanguages = props => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <div style={{ marginTop: 100, marginBottom: 50 }}>
      <Tabs
        value={props.value}
        onChange={props.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {languages.map(lang => {
          return (
            <Tab
              key={lang}
              label={lang}
              onClick={props.onSelect.bind(null, lang)}
            />
          )
        })}
      </Tabs>
    </div>
  )
}

export default TabLanguages
