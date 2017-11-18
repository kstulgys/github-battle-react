import React from 'react';
import TabsLanguages from './TabsLanguages';
import AllLanguages from './AllLanguages';
import JavaScriptLanguage from './JavaScriptLanguage';

export default class Popular extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    console.log(value);
    this.setState({ value });
  };

  render() {

    

    return (
      <div>
      <TabsLanguages 
        value={this.state.value} 
        handleChange={this.handleChange} 
        {...this.props}
      />
      
      {this.state.value === 0 && 
      <AllLanguages />}
      
      {this.state.value === 1 && 
      <JavaScriptLanguage />}
      </div>
    );
  }
};

