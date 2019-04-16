import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <div className="App">
              <Header/>
              <Content/>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
