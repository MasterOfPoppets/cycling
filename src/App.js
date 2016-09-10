import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

import Col from './Col';

const MyQuery = gql`
  query GetCols {
    cols {
      name
      profileGradients
    }
  }
`;

const Sanetsch = graphql(MyQuery, {
  props: ({ data: { loading, cols } }) => ({
    loading,
    col: cols ? cols[0] : null,
  }),
})(Col);

const JouxPlane = graphql(MyQuery, {
  props: ({ data: { loading, cols } }) => ({
    loading,
    col: cols ? cols[1] : null,
  }),
})(Col);

const Roselend = graphql(MyQuery, {
  props: ({ data: { loading, cols } }) => ({
    loading,
    col: cols ? cols[2] : null,
  }),
})(Col);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Sanetsch division={30} height={350} width={750} />
        <JouxPlane division={15} height={200} width={345} />
        <Roselend division={30} height={250} width={700} />
      </div>
    );
  }
}

export default App;
