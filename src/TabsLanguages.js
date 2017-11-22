import React from 'react';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
});

const TabLanguages = (props) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  const { classes } = props;
  
  return (
    <div className={classes.root}>
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
  );
};

export default withStyles(styles)(TabLanguages);