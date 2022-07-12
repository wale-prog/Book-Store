/*eslint-disable*/

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkStatus } from "../redux/categories/categories";

const Categories = () => {
    const dispatch = useDispatch()
  const category = useSelector((state) => state.category);
  const handleClick = () => dispatch(checkStatus())

  return (
    <div>
      <button onClick={handleClick} type="submit" style={{ padding: "12px" }}>
        Check status
      </button>
      <h1>{category[0]}</h1>
    </div>
  );
};
export default Categories;
