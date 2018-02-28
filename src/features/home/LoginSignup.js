import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class LoginSignup extends Component {
  static propTypes = {

  };
    constructor(){
        super();
        this.state={
            phone:'',
            phoneLength:0,
        }

        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handlePhoneNumberChange(e){
        console.log(e.target.value)
        this.setState({
            phone:e.target.value,
            phoneLength:e.target.value.length,
        })
    }
    handleFormSubmit(e){
        e.preventDefault();
        console.log(e.target.phone.value);
        console.log(e.target.password.value);
        var payload={
            phone:"+88"+e.target.phone.value,
            password:e.target.password.value,
        }
        console.log(payload)
        fetch('https://backenddev.shophobe.com/api/auth/login/',
            {
            method: 'post',
            body: JSON.stringify(payload),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log( data)
        });
    }
  render() {
    const  style ={
      margin: 12,
    }
    const {phone, phoneLength}= this.state;
    console.log(phone, phoneLength);

    return (
      <div className="home-login-signup">
        <div className="loginSignup">
            <form onSubmit={this.handleFormSubmit}>
            <TextField
                errorText={phoneLength >14 ? "Invalid Phone Number": ''}
                onChange={this.handlePhoneNumberChange}
                name="phone"
                hintText="01**********"
                floatingLabelText="Enter Phone Number"
            />

                    <TextField
                        name="password"
                        type="password"
                        hintText="********"
                        floatingLabelText="Enter Password"
                    />


            <RaisedButton type= "submit" label="Login / Signup" secondary={true} style={style} />
            </form>
        </div>
      </div>
    );
  }
}
