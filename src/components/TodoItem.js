import React, { Component } from "react";
import styled from "styled-components";

const StyledTodo = styled.li`
  padding: 20px 3px;
  border-bottom: 1px solid #131313;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};

  label {
    cursor: pointer;
  }

  input[type="checkbox"] {
    vertical-align: middle;
    margin-right: 5px;
  }

  form {
    display: inline-block;
  }
  input[type="text"] {
    display: inline-block;
    padding: 1rem;
  }

  button {
    visibility: hidden;
    margin-left: 14px;
    appearance: none;
    color: #131313;
    padding: 0.7rem;
    cursor: pointer;
    font-size: 1.3rem;
    &[data-action="edit"]:hover {
      background-color: #131313;
      border-color: #131313;
      color: #fff;
    }
    &[data-action="remove"]:hover {
      background-color: #e62727;
      border-color: #e62727;
      color: #fff;
    }

    i {
      font-size: 1.4rem;
    }
  }

  &:hover button {
    visibility: visible;
  }
`;

class TodoItem extends Component {
  state = {
    origText: this.props.todo.text,
    text: this.props.todo.text,
    editMode: false
  };

  handleTodoUpdate = e => {
    if (e.target.value !== "") {
      this.setState({
        text: e.target.value
      });
    }
  };

  handleTodoChangeSubmit = e => {
    const { text } = this.state;
    const { id } = this.props.todo;
    e.preventDefault();
    this.props.updateTodo(id, text);
    this.setState({
      editMode: false,
      origText: text
    });
  };

  enableEditMode = () => {
    this.setState(
      {
        editMode: true
      },
      () => {
        this.inputNode.focus();
      }
    );
  };

  disableEditMode = () => {
    const { origText } = this.state;
    this.setState({
      editMode: false,
      text: origText
    });
  };

  renderTodoText = () => {
    return <span>{this.state.text}</span>;
  };

  renderTodoInput = () => {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleTodoChangeSubmit}>
        <input
          ref={input => (this.inputNode = input)}
          type="text"
          value={text}
          onChange={this.handleTodoUpdate}
          onBlur={this.disableEditMode}
        />
      </form>
    );
  };

  render() {
    const { editMode } = this.state;
    const { completed, id, index, toggleTodo, removeTodo } = this.props;

    return (
      <StyledTodo style={{ animationDuration: "300ms" }} completed={completed}>
        {!this.state.editMode && (
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => {
                toggleTodo(id);
              }}
            />
            {this.renderTodoText()}
          </label>
        )}
        {editMode && this.renderTodoInput()}
        <button
          data-action="remove"
          type="button"
          onClick={() => {
            removeTodo(index);
          }}
        >
          Remove <i className="far fa-times-circle" />
        </button>
        {!editMode ? (
          <button
            data-action="edit"
            type="button"
            onClick={this.enableEditMode}
          >
            Edit <i className="fas fa-edit" />
          </button>
        ) : null}
      </StyledTodo>
    );
  }
}

export default TodoItem;
