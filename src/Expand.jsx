import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const icon = this.state.isOpen ? (
      <i className="fas fa-chevron-up"></i>
    ) : (
      <i className="fas fa-chevron-down"></i>
    );

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.handleClick}>
            {icon}
          </button>
        </div>
        {this.state.isOpen ? this.props.children : null}
      </div>
    );
  }
}

export default Expand;