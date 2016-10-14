import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import {grey400, deepOrange700, darkBlack, lightBlack} from 'material-ui/styles/colors';


let style = {
  text: {
    textAlign: 'center',
    marginBottom: '50px',
    color: deepOrange700
  }
};

const NewChallenge = (props) => {
  return (
    <div className="flex-items-xs-center">

      <h1 style={style.text}>Create Challenge</h1>

      <form className="form-horizontal">
        <fieldset>
          <div className="form-group">
            <label className="col-md-4 control-label" >Goal Type</label>
            <div className="col-md-4">
              <select id="goalType" name="goalType" className="form-control">
                <option value="steps">Steps</option>
                <option value="floors">Floors</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" >Goal</label>
            <div className="col-md-4">
              <input id="goalAmount" name="goalAmount" type="number" placeholder="# of steps/floors" className="form-control input-md"/>
            </div>
          </div>


          <div className="form-group">
            <label className="col-md-4 control-label" >Starting Date</label>
            <div className="col-md-4">
              <input id="startDate" name="startDate" type="datetime-local" className="form-control input-md" min={new Date().toISOString().split('T')[0]}/>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" >End Date</label>
            <div className="col-md-4">
              <input id="expirationDate" name="expirationDate" type="datetime-local" className="form-control input-md" min={new Date().toISOString().split('T')[0]}/>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" >Buy In Amount</label>
            <div className="col-md-4">
              <input id="buyInAmount" name="buyInAmount" type="number" placeholder="ethers" className="form-control input-md"/>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" style={{marginTop: '17px'}}>Ethereum Address</label>
                {<SelectField className="col-md-4" id='userEtherWallet'
                  value={props.value}
                  onChange={props.handleChange}
                  floatingLabelText={props.value === null ? 'No address selected' : 'Balance: ' + (props.balance / 1000000000000000000) + ' ether'}
                  floatingLabelFixed={true}
                  underlineStyle={{width: '350px'}}
                  autoWidth={false}
                  maxHeight={200}
                  style={{width: '395px', backgroundColor: 'white', borderRadius: '4px', marginLeft: '15px', borderColor: '#d3d3d3', borderStyle: 'solid', borderWidth: '1px' }}
                  hintText="Select an ethereum address">{
                  props.eth.map((obj, index) => {
                    return (
                      <MenuItem key={index} value={obj} primaryText={obj} />
                    );
                  })}
              </SelectField>}
          </div>
          <div className="form-group">
             <RaisedButton className="col-md-1 col-md-offset-3"
              onClick={(e)=>{ props.postChallenge(e, props.value); }}
              label="Add"
             />
             <RaisedButton className="col-md-1 col-md-offset-1"
              onClick={props.clear}
              label="Clear"
             />
             <RaisedButton className="col-md-1 col-md-offset-1"
              onClick={props.cancel}
              label="Cancel"
             />
          </div>
        </fieldset>
      </form>
               <Snackbar
                open={props.success}
                message="Success: Challenge added!"
                autoHideDuration={2000}
                onRequestClose={props.handleSuccessNotification}
               />
               <Snackbar
                open={props.failure}
                message="Error: Something bad happened when processing your request."
                autoHideDuration={2000}
                onRequestClose={props.handleFailureNotification}
               />
    </div>
  );
};

export default NewChallenge;





