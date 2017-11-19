// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  root: {
    
    padding: 30,
    
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderRadius: 50,
    width: 100,
  },
  avatar: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderRadius: 50,
    width: 100,
  },
  grid: {
    textAlign: 'center',
    
    
  },
  listStyle: {
    listStyleType: 'none',
    
  },
});

function RepoGrid(props) {
  const { classes } = props;

  const items = props.repos.map((repo, i) => {
    return (
      <Grid item xs={3} className={classes.grid} key={repo.name}>
        <ul className={classes.listStyle}>
          <div>#{i+1}</div>
          <img className={classes.avatar} src={repo.owner.avatar_url}/>
          <li><a href={repo.html_url}>{repo.name}</a></li>
          <li>@{repo.owner.login}</li>
          <li>{repo.stargazers_count} stars</li>
        </ul>         
      </Grid>
    )
  })

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {items}
      </Grid>
    </div>
  );
}

// RepoGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(RepoGrid);

