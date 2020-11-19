import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  updateFormData = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitFormData = (e) => {
    e.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submitFormData}>
      <div>
        <label>
          Username
          <input id="username" name="username" type="text" onChange={this.updateFormData} value={this.state.username}/>
        </label>
      </div>
      <div>
        <label>
          Password
          <input id="password" name="password" type="password" onChange={this.updateFormData} value={this.state.password}/>
        </label>
      </div>
      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
    );
  }
}

export default LoginForm;
