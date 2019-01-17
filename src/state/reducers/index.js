const initialTodoListState = [
  {
    id: 1,
    text: "Learn React",
    completed: true
  },
  {
    id: 2,
    text: "Learn Redux",
    completed: false
  },
  {
    id: 3,
    text: "Learn Machine Learning",
    completed: true
  }
];

const initialVisibilityFilter = "SHOW_ALL";

const todoListReducer = (state = initialTodoListState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload.text,
          completed: false
        }
      ];
    case "REMOVE_TODO":
      return [
        ...state.slice(0, action.payload.index),
        ...state.slice(action.payload.index + 1)
      ];
    case "TOGGLE_TODO":
      return state.map(t => {
        if (t.id === action.payload.id) {
          t.completed = !t.completed;
        }
        return t;
      });
    case "UPDATE_TODO":
      return state.map(t => {
        if (t.id === action.payload.id) {
          t.text = action.payload.text;
        }
        return t;
      });
    default:
      return state;
  }
};

const visibilityFilterReducer = (state = initialVisibilityFilter, action) => {
  if (action.type === "VISIBILITY_FILTER") {
    return action.payload.filter;
  }
  return state;
};

// const combineReducers = reducers => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce((nextState, key) => {
//       nextState[key] = reducers[key](state[key], action);
//       return nextState;
//     }, {});
//   };
// };

export { todoListReducer, visibilityFilterReducer };
