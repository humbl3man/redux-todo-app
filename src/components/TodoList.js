import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { toggleTodo, removeTodo, updateTodo } from "../state/actions";

import TodoItem from "./TodoItem";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TodoList = props => {
  function renderList(vFilter) {
    return props.todos
      .filter(t => {
        if (vFilter === "SHOW_COMPLETED") {
          return t.completed === true;
        } else if (vFilter === "SHOW_INCOMPLETE") {
          return t.completed === false;
        }
        return true;
      })
      .map((t, index) => {
        return <TodoItem key={t.id} index={index} todo={t} {...props} />;
      });
  }

  return <StyledList>{renderList(props.filter)}</StyledList>;
};

const mapStateToProps = state => {
  return { todos: state.todos, filter: state.filter };
};

export default connect(
  mapStateToProps,
  {
    updateTodo,
    removeTodo,
    toggleTodo
  }
)(TodoList);
