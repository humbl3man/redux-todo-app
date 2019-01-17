import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addTodo, changeVisibilityFilter } from "./../state/actions";

const StyledFormDiv = styled.div`
  margin-bottom: 4rem;

  form {
    display: flex;
  }

  input[type="text"],
  button {
    padding: 1rem;
    appearance: none;
    display: block;
    font-size: 1.4rem;
  }

  input[type="text"] {
    flex: 4;
    outline: 0;
    border: 1px solid #131313;
    &:focus,
    &:active {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    }
  }
  button {
    /* flex: 1; */
    flex-basis: 100px;
    border-left: 0;
    border: 1px solid #131313;
    background-color: #fff;
    color: #131313;
    cursor: pointer;
    transition: 50ms linear;
    &:hover {
      background-color: #131313;
      color: #fff;
    }
  }
`;

class AddTodo extends Component {
  state = {
    text: ""
  };

  handleTextUpdate = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.text.trim() === "") {
      return;
    }

    this.props.addTodo(this.state.text);

    if (this.props.filter !== "SHOW_ALL") {
      this.props.changeVisibilityFilter("SHOW_ALL");
    }

    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <StyledFormDiv>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleTextUpdate}
            placeholder="Enter a todo..."
          />
          <button type="submit">
            <i className="fas fa-plus" />
          </button>
        </form>
      </StyledFormDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  {
    addTodo,
    changeVisibilityFilter
  }
)(AddTodo);
