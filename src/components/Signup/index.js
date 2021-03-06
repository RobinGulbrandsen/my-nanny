import React from 'react';
import { Link } from 'react-router';



class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amazonId: '999888777666',
      firstname: '',
      email: '',
      phone: '',
      password: '',
      passwordDupe: '',
    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  submitSignupForm(e) {
    console.log(e.target);
    const signupData = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'account': {
        'username': this.state.firstname,
        'phone': this.state.phone,
        'email': this.state.email
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/account',
      type: 'POST',
      dataType: 'application/json',
      data: signupData,
      complete: function (data) {
        console.log('Added account:' + JSON.stringify(data));
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td><input type='text' name='firstname'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type='text' name='email'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td><input type='text' name='phone'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input type='password' name='password'
                  placeholder='password'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Re-type</td>
                <td><input type='password' name='passwordDupe'
                  placeholder='password'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.submitSignupForm.bind(this)}>Sign Up</button>
        </form>
        <span>Have an account? </span>
        <Link to='/login'>Log In</Link>
      </div>
    );
  }
}


export default Signup;








  