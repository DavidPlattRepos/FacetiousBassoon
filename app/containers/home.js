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
    var context=this;
  }

  render() {
    return(
      <Paper className={styles.homePage} zDepth={1}>
        <h1 style={{'fontSize':'70px', 'color': 'white', 'position':'absolute', 'left':'25%', top: '32%'}}>Welcome to FitCoin</h1>
        <img className={styles.icon1} src='http://res.cloudinary.com/dijpyi6ze/image/upload/v1476422065/smartwatch_oavbv0.svg'/>
        <p1 style={{'color': 'white', 'fontSize':'40px', 'position':'relative', 'top': '75%', 'left':'15%'}}> Sign up</p1>
        <img className={styles.icon2} src='http://res.cloudinary.com/dijpyi6ze/image/upload/v1476422710/team_s1rezr.svg'/>
        <p1 style={{'color': 'white', 'fontSize':'40px', 'position':'relative', 'top': '75%', 'left':'26%'}}> Join Challenge</p1>
        <img className={styles.icon3} src='http://res.cloudinary.com/dijpyi6ze/image/upload/v1476422618/money_ogtxym.svg'/>
        <p1 style={{'color': 'white', 'fontSize':'40px', 'position':'relative', 'top': '75%', 'left':'35%'}}> Win Money</p1>
      </Paper>
    );
  }
}

export default Home;


