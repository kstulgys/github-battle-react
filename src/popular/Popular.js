import React from 'react'
// import { compose, withStateHandlers, lifecycle } from 'recompose'
import TabsLanguages from './TabsLanguages'
import { fetchPopularRepos } from '../api'
import ReposGrid from './ReposGrid'
import Loader from '../common/Loader'
import R from 'ramda'
const log = R.tap(console.log)

export default class Popular extends React.Component {
  state = {
    value: 0,
    selected: 'All',
    repos: null
  }

  componentDidMount() {
    this.handleSelected(this.state.selected)
  }

  handleChange = this.setState({ value: R.path(['target', 'value']) })

  handleSelected = R.pipe(
    lang =>
      this.setState({
        selected: lang,
        repos: null
      }),
    lang =>
      fetchPopularRepos(lang).then(repos => {
        this.setState({
          selected: lang,
          repos
        })
      })
  )

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
        {!this.state.repos ? (
          <Loader />
        ) : (
          <ReposGrid repos={this.state.repos} />
        )}
      </div>
    )
  }
}

// const Popular = ({ value, selected, repos }) => {
//   console.log(value, selected, repos)

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center'
//       }}
//     >
//       {!repos ? <Loader /> : <ReposGrid repos={repos} />}
//     </div>
//   )
// }

// export default compose(
//   withStateHandlers(
//     ({ value = 0, selected = 'All', repos = null }) => ({
//       value,
//       selected,
//       repos
//     }),
//     {
//       incrementOn: ({ counter }) => value => ({
//         counter: counter + value
//       }),
//       handleSelected: R.pipe(
//         lang =>
//           this.setState({
//             selected: lang,
//             repos: null
//           }),
//         lang =>
//           fetchPopularRepos(lang).then(repos => {
//             this.setState({
//               selected: lang,
//               repos
//             })
//           })
//       )
//     }
//   ),
//   lifecycle({
//     componentDidMount() {
//       this.handleSelected(this.state.selected)
//     }
//   })
// )(Popular)
