import Home from './Home.js';
import React from 'react';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: IBM Plex Mono,monospace;
  }
`

const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <Home/>
        </React.Fragment>
    );
}

export default App;
