import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  tweeting = (e) => {
    this.setState({message: e.target.value})
  }

  charsLeft = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.tweeting} value={this.state.message} />
        <p>{this.charsLeft()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
