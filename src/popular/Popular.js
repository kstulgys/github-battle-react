import React from 'react'
import TabsLanguages from './TabsLanguages'
import AllLanguages from './AllLanguages'
import JavaScriptLanguage from './JavaScriptLanguage'
import api from '../utils/api'
import RepoGrid from './RepoGrid'
import Loader from '../common/Loader'

export default class Popular extends React.Component {
  state = {
    value: 0,
    selected: 'All',
    repos: null
  }

  componentDidMount() {
    this.handleSelected(this.state.selected)
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleSelected = lang => {
    this.setState({
      selected: lang,
      repos: null
    })

    api.fetchPopularRepos(lang).then(repos => {
      this.setState({
        repos
      })
    })
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <TabsLanguages
          value={this.state.value}
          selected={this.state.selected}
          handleChange={this.handleChange}
          onSelect={this.handleSelected}
          {...this.props}
        />
        {!this.state.repos ? <Loader /> : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}
