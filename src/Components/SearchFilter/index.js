import React from "react";
import "./styles.css";

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
  categories,
  isDarkMode,
}) => {
  return (
    <div className={`search-filter ${isDarkMode ? "dark" : "light"}`}>
      {/* Search input field */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="search-input"
      />

      {/* Dropdown for category filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="category-dropdown"
      >
        <option value="all">All</option>
        {categories?.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
