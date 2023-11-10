// CategoryFilter.js
import React from "react";
import { useTaskContext } from "./TaskContext";

function CategoryFilter() {
  const { categories, selectedCategory, onCategoryChange } = useTaskContext();

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
