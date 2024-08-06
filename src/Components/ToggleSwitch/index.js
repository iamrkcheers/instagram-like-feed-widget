import React from "react";
import "./styles.css";

const ToggleSwitch = ({ isDarkMode, onToggle }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        id="darkModeToggle"
        checked={isDarkMode}
        onChange={onToggle}
      />
      <label className="toggle-switch-label" htmlFor="darkModeToggle">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
