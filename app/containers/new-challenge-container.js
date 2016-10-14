import axios from 'axios';
import moment from 'moment';

import React, {Component} from 'react';
// import $ from 'jquery';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Paper from 'material-ui/Paper';

import NewChallenge from '../components/newChallenge';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class NewChallengeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      failure: false,
      value: null,
      eth: [],
      balance: null,
      ethGrab: false
    };

    this.handleSuccessNotification = this.handleSuccessNotification.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFailureNotification = this.handleFailureNotification.bind(this);
    this.postChallenge = this.postChallenge.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentDidMount () {
    axios.get('/accounts')
    .then((results) => {
      this.setState({
        ...this.state,
        eth: results.data,
        ethGrab: true
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  postChallenge (e, wallet) {
    const context = this;
    var userId = this.props.user.id;
    var userEtherWallet = wallet;
    var goalAmount = $('#goalAmount').val();
    var buyInAmount = $('#buyInAmount').val() * 1000000000000000000;
    var startDate = moment($('#startDate').val()).toISOString();
    var expirationDate = moment($('#expirationDate').val()).toISOString();
    var goalType = $('#goalType').val();

    console.log(startDate, expirationDate);
    axios.post('/challenges', {
      'userId': userId,
      'startDate': startDate,
      'expirationDate': expirationDate,
      'goalType': goalType,
      'goalAmount': goalAmount,
      'buyInAmount': buyInAmount,
      'userEtherWallet': userEtherWallet
    })
    .then(function(res) {
      context.handleSuccessNotification();
      console.log('posted a challenge', res);
    })
    .catch(function(err) {
      context.handleFailureNotification();
      console.log('challenge error', err);
    });

  }

  clear (e) {
    e.preventDefault();
    $('#userEtherWallet').val('');
    $('#buyInAmount').val('');
    $('#goalAmount').val('');
    $('#startDate').val('');
    $('#expirationDate').val('');
    $('#goalType').val('');
  }

  handleSuccessNotification () {
    this.setState({
      ...this.state,
      success: !this.state.success
    });
  }

  handleFailureNotification () {
    this.setState({
      ...this.state,
      failure: !this.state.failure
    });
  }

  handleChange (event, index, value) {
    axios.get('/balance/' + value)
    .then((results) => {
      this.setState({
        ...this.state,
        balance: results.data,
        value
      });
    })
  }

  render () {
    return (
      <Paper style={{marginLeft: '100px', marginRight: '100px', marginTop: '40px', backgroundImage:'url(https://i.ytimg.com/vi/NE99rdMWNLw/maxresdefault.jpg)', backgroundSize:'cover'}}>
        <NewChallenge value={this.state.value} balance={this.state.balance} eth={this.state.eth} postChallenge={this.postChallenge} clear={this.clear} handleChange={this.handleChange} success={this.state.success} handleSuccessNotification={this.handleSuccessNotification} failure={this.state.failure} handleFailureNotification={this.handleFailureNotification} cancel={browserHistory.goBack} />
      </Paper>
    );
  }

}

const mapStateToProps = function(store) {
  return {
    user: store.userState.user
  };
};
export default connect(mapStateToProps)(NewChallengeContainer);
