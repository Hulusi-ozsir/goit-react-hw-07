import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Type a name..."
      />
    </label>
  );
};

export default Filter;
