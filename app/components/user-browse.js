
import React, {Component} from 'react';
import { Link, browserHistory} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
var moment = require('moment');
var path = require ('path');
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';

import {List, ListItem} from 'material-ui/List';

import Divider from 'material-ui/Divider';

import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import GridListExampleSimple from './browse';

const style = {
  textField: {
    margin: '0px 0px 0px 0px'
  },

  chip: {
    margin: 4,
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  paper: {
    height: '28px',
    width: '140px',
    margin: '20px 0px 20px 10px',

  },

  h3: {
    display: 'flex',
    // textAlign: 'center',
    // verticalAlign: 'middle',
    margin: '0px 0px 0px 10px'

  },

  create: {
    display: 'flex',
    margin: '0px 0px 0px 160px'
  },

  list: {
    flex: 1,
    width: '450px'

  }

};





class Browse extends Component {
  constructor(props) {
    super(props);
  }


  render () {

    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    // FILTER ACTIVE CHALLENGES
    var activeChallenges = this.props.joinableChallenges.filter(challenge => challenge.status !== 'failed');

    return (
      <div>
      <Paper style={style.paper} zDepth={1}>
        <h3 style={style.h3}>Dashboard</h3>

      </Paper>

      <GridListExampleSimple />

      <TextField style={style.textField} id='etherAddress'
      floatingLabelText="Enter Your Ethereum Address"
      />


      {activeChallenges.map((challenge, index) => {
        return (
        <div key={index}>
         <List style={style.list}>
            <ListItem
              leftAvatar={<Avatar />}
              rightIconButton={
                <IconMenu onClick={() => this.props.handleJoinChallengeRequest(challenge.id)} iconButtonElement={iconButtonElement}>
                  <MenuItem >Join</MenuItem>
                </IconMenu>
              }

              primaryText={challenge.goalAmount < 0 ? 'You Won ' + challenge.goalAmount + ' Ethereum!' : 'Sorry You Didn\'t Win, Your Loss is ' + challenge.goalAmount + ' Ethereum.'}
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>{'Starts: ' + moment(challenge.creationDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</span><br />
                  {'Ends: ' + moment(challenge.expirationDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
          </List>
        </div>
      );
      })}


      </div>

    );

  }
}

const mapStateToProps = function(store) {
  return {

  };
};

export default connect(mapStateToProps)(Browse);

