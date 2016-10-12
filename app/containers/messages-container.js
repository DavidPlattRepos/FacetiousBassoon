import React, {Component} from 'react';
import { connect } from 'react-redux';
import Messages from '../components/messages';
import store from '../store';
import {getMessages, hideMessage} from '../actions/user-actions';
import axios from 'axios';

class MessagesContainer extends Component {
  constructor(props) {
    super(props);

    this.hideMessage = this.hideMessage.bind(this);
  }

  componentDidMount () {
    axios.get('/messages')
      .then(function(messages) {
        // console.log(messages);
        console.log('messages container response', messages.data );
        var messages = messages.data;
        store.dispatch(getMessages(messages));
      })
      .catch(function(err) {
        console.log('GET messages error', err);
      });
  }



  hideMessage(messageId) {
    console.log('clicked hide a message');

    axios.put('/messages/' + messageId, {
      read: true
    })
    .then(function(res) {
      console.log('hid a  message', res );
      store.dispatch(hideMessage(messageId));
    })
    .catch(function(err) {
      console.log('hide messages error', err);
    });
  }

  render () {

    return (
      <Messages messages={this.props.messages}
                hideMessage={this.hideMessage}

      />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    messages: store.userState.messages,
    user: store.userState.user
  };
};

export default connect(mapStateToProps)(MessagesContainer);