import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    background: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
    }
  }

  handleChange = (event) => {
    let value = event.target.value;

    this.setState(function () {
      return {
        username: value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    const { classes } = this.props;
    return (
      
        <form onSubmit={this.handleSubmit}>
        <div className={classes.container}>
          <Typography type="display1" gutterBottom>
            {this.props.label}
          </Typography>
          
          <FormControl className={classes.formControl}>
            <InputLabel
              FormControlClasses={{
                focused: classes.inputLabelFocused,
              }}
              htmlFor="custom-color-input"
            >
            gitHub Username
            </InputLabel>
            <Input
              classes={{
                inkbar: classes.inputInkbar,
              }}
              id="custom-color-input"
              value={this.state.username}
              type='text'
              autoComplete='off'
              onChange={this.handleChange}
            />
          </FormControl>
          
          <Button type='submit' raised color="primary" className={classes.button} disabled={!this.state.username}>
            Submit
          </Button>   
        </div>   
        </form>
      
    );
  }
}

export default withStyles(styles)(PlayerInput);

{/* <input 
name='username'
value={this.state.username}
placeholder='gitHub Username'
type='text'
autoComplete='off'
onChange={this.handleChange}
/> */}