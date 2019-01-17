const addTodo = text => {
  return {
    type: "ADD_TODO",
    payload: {
      text
    }
  };
};

const removeTodo = index => {
  return {
    type: "REMOVE_TODO",
    payload: {
      index
    }
  };
};

const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id
    }
  };
};

const updateTodo = (id, text) => {
  return {
    type: "UPDATE_TODO",
    payload: {
      id,
      text
    }
  };
};

const changeVisibilityFilter = filter => {
  return {
    type: "VISIBILITY_FILTER",
    payload: {
      filter
    }
  };
};

export { addTodo, removeTodo, toggleTodo, updateTodo, changeVisibilityFilter };
