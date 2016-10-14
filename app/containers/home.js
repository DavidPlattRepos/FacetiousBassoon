import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import styles from '../public/styles.css';

class Home extends Component {
  
  constructor (props) {
    super(props);
  }  

  componentDidMount() {
    var context = this;
  }

  render() {
    return (
      <div>
        <Paper className={styles.homePage} zDepth={1}>
          <h1 style={{'fontSize': '100px', 'color': 'white', textAlign: 'center', marginTop: '20%'}}>Welcome to FitCoin</h1>
        </Paper>
      </div>
    );
  }
}

export default Home;


