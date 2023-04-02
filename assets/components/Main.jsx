import React from 'react';
import Horloge from './Horloge';
// import React,{ Component } from "react" ;
export default class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>Hello, World !</div>
        <Horloge />
      </div>
    );
  }
}

