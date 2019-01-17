import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeVisibilityFilter } from "./../state/actions";

const FilterBar = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  border: 1px solid #eee;
`;
const FilterLink = styled.button`
  text-decoration: ${props => (!props.disabled ? "underline" : "none")};
  color: ${props => (!props.disabled ? "dodgerblue" : "#111")};
  font-weight: ${props => (!props.disabled ? "normal" : "bold")};
  appearance: none;
  padding: 0;
  border: 0;
  font-size: 1.4rem;
  cursor: ${props => (!props.disabled ? "pointer" : "auto")};
  margin-right: 1rem;
`;

const Filter = props => {
  const filters = [
    {
      label: "Show All",
      setFilter: "SHOW_ALL",
      disabled: props.filter === "SHOW_ALL"
    },
    {
      label: "Show Completed",
      setFilter: "SHOW_COMPLETED",
      disabled: props.filter === "SHOW_COMPLETED"
    },
    {
      label: "Show Incomplete",
      setFilter: "SHOW_INCOMPLETE",
      disabled: props.filter === "SHOW_INCOMPLETE"
    }
  ];

  const renderFilters = () => {
    return filters.map(f => {
      return (
        <FilterLink
          key={f.label}
          disabled={f.disabled}
          onClick={() => {
            if (!f.disabled) {
              props.changeVisibilityFilter(f.setFilter);
            }
          }}
        >
          {f.label}
        </FilterLink>
      );
    });
  };

  return <FilterBar>Filter By: {renderFilters()}</FilterBar>;
};

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  {
    changeVisibilityFilter
  }
)(Filter);
