import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import TodoList from "./TodoList";

const GlobalStyle = createGlobalStyle`

  *, *:before, *:after { box-sizing: border-box; }
  html { font-size: 10px; }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
  }

`;

const PageContent = styled.section`
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <PageContent>
        <AddTodo />
        <TodoList />
        <Filter />
      </PageContent>
    </React.Fragment>
  );
};

export default App;
